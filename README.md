# NexusAI - Micro Frontend Architecture with Kubernetes Ingress

This project demonstrates how to deploy multiple Next.js micro frontends under a single domain using Azure Application Gateway Ingress Controller (AGIC).

**Author:** Renan Rodrigues

## Architecture Overview

```
https://web.triggerfreaks.com
├── /           → nexusai-principal
├── /features   → nexusai-features
├── /pricing    → nexusai-pricing
├── /about      → nexusai-about
├── /contact    → nexusai-contact
└── /blog       → nexusai-blog
```

## Tech Stack

| App | Framework | CSS | Build Output | Port |
|-----|-----------|-----|--------------|------|
| principal | Next.js 14 | Tailwind CSS | standalone | 3000 |
| features | Next.js 14 | Tailwind CSS | standalone | 3000 |
| pricing | Next.js 14 | Tailwind CSS | standalone | 3000 |
| about | Next.js 14 | Tailwind CSS | standalone | 3000 |
| contact | Next.js 16 | Tailwind CSS | standalone | 3000 |
| blog | Next.js 14 | Tailwind CSS | standalone | 3000 |

## URLs

| Path | URL | Service |
|------|-----|---------|
| `/` | https://web.triggerfreaks.com/ | nexusai-principal |
| `/features` | https://web.triggerfreaks.com/features | nexusai-features |
| `/pricing` | https://web.triggerfreaks.com/pricing | nexusai-pricing |
| `/about` | https://web.triggerfreaks.com/about | nexusai-about |
| `/contact` | https://web.triggerfreaks.com/contact | nexusai-contact |
| `/blog` | https://web.triggerfreaks.com/blog | nexusai-blog |

## Dockerfile Pattern

All apps use the same multi-stage Dockerfile:

```dockerfile
# Stage 1: Install dependencies
FROM node:20-alpine AS deps
COPY package*.json ./
RUN npm ci

# Stage 2: Build application
FROM node:20-alpine AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production runtime
FROM node:20-alpine AS runner
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
CMD ["node", "server.js"]
```

Key points:
- Uses `output: 'standalone'` in `next.config.js`
- Non-root user for security
- Exposes port 3000

## Kubernetes Setup

### Namespace
```bash
kubectl create namespace nexusai
```

### Image Pull Secret
```bash
kubectl create secret docker-registry acr-secret \
  --docker-server=<acr>.azurecr.io \
  --docker-username=<user> \
  --docker-password=<password> \
  -n nexusai

kubectl patch serviceaccount default -n nexusai \
  -p '{"imagePullSecrets": [{"name": "acr-secret"}]}'
```

### Deployment Pattern
Each app has `k8s/deployment.yaml` and `k8s/service.yaml`:

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nexusai-<app>
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nexusai-<app>
  template:
    spec:
      containers:
        - name: nexusai-<app>
          image: <acr>.azurecr.io/nexusai-<app>:latest
          ports:
            - containerPort: 3000
```

```yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nexusai-<app>
spec:
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 3000
  selector:
    app: nexusai-<app>
```

## Ingress Configuration

The ingress routes traffic to each micro frontend based on path:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nexusai-ingress
  annotations:
    kubernetes.io/ingress.class: azure/application-gateway
    appgw.ingress.kubernetes.io/connection-draining: "true"
    appgw.ingress.kubernetes.io/connection-draining-timeout: "30"
spec:
  rules:
    - host: web.triggerfreaks.com
      http:
        paths:
          - path: /features
            pathType: Prefix
            backend:
              service:
                name: nexusai-features
                port:
                  number: 80
          - path: /pricing
            pathType: Prefix
            backend:
              service:
                name: nexusai-pricing
                port:
                  number: 80
          - path: /about
            pathType: Prefix
            backend:
              service:
                name: nexusai-about
                port:
                  number: 80
          - path: /contact
            pathType: Prefix
            backend:
              service:
                name: nexusai-contact
                port:
                  number: 80
          - path: /blog
            pathType: Prefix
            backend:
              service:
                name: nexusai-blog
                port:
                  number: 80
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nexusai-principal
                port:
                  number: 80
```

**Important:** The `/` path must be last. More specific paths are matched first.

## Next.js basePath Configuration

Each child frontend requires `basePath` in `next.config.js` to serve assets correctly:

| App | basePath |
|-----|----------|
| principal | (none) |
| features | `/features` |
| pricing | `/pricing` |
| about | `/about` |
| contact | `/contact` |
| blog | `/blog` |

Example:
```javascript
// features/next.config.mjs
const nextConfig = {
  output: 'standalone',
  basePath: '/features',
};
```

Without `basePath`, CSS/JS assets would load from `/` instead of `/features`, breaking the page.

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci-cd.yaml`):
- Triggers on push to `main`
- Builds only changed apps (path-based detection)
- Pushes images to Azure Container Registry
- Tags: `latest`

Required GitHub Secrets:
- `ACR_LOGIN_SERVER`
- `ACR_USERNAME`
- `ACR_PASSWORD`

## Deploy

```bash
# Apply all manifests
kubectl apply -f principal/k8s/ -n nexusai
kubectl apply -f features/k8s/ -n nexusai
kubectl apply -f pricing/k8s/ -n nexusai
kubectl apply -f about/k8s/ -n nexusai
kubectl apply -f contact/k8s/ -n nexusai
kubectl apply -f blog/k8s/ -n nexusai

# Rollout after image update
kubectl rollout restart deployment -n nexusai
```
