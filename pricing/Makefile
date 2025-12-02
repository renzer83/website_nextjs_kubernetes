.PHONY: help install dev build start docker-build docker-run docker-stop k8s-deploy k8s-delete clean

# Variables
IMAGE_NAME = nexusai-pricing
IMAGE_TAG = latest
DOCKER_REGISTRY =
NAMESPACE = default

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

dev: ## Run development server
	npm run dev

build: ## Build production application
	npm run build

start: ## Start production server
	npm run start

lint: ## Run linter
	npm run lint

docker-build: ## Build Docker image
	docker build -t $(IMAGE_NAME):$(IMAGE_TAG) .

docker-run: ## Run Docker container
	docker run -d --name $(IMAGE_NAME) -p 3000:3000 $(IMAGE_NAME):$(IMAGE_TAG)

docker-stop: ## Stop and remove Docker container
	docker stop $(IMAGE_NAME) || true
	docker rm $(IMAGE_NAME) || true

docker-compose-up: ## Start with docker-compose
	docker-compose up -d

docker-compose-down: ## Stop docker-compose
	docker-compose down

docker-logs: ## Show Docker container logs
	docker logs -f $(IMAGE_NAME)

k8s-deploy: ## Deploy to Kubernetes
	kubectl apply -f k8s/deployment.yaml -n $(NAMESPACE)
	kubectl apply -f k8s/service.yaml -n $(NAMESPACE)
	kubectl apply -f k8s/ingress.yaml -n $(NAMESPACE)
	kubectl apply -f k8s/hpa.yaml -n $(NAMESPACE)

k8s-delete: ## Delete from Kubernetes
	kubectl delete -f k8s/hpa.yaml -n $(NAMESPACE) || true
	kubectl delete -f k8s/ingress.yaml -n $(NAMESPACE) || true
	kubectl delete -f k8s/service.yaml -n $(NAMESPACE) || true
	kubectl delete -f k8s/deployment.yaml -n $(NAMESPACE) || true

k8s-status: ## Check Kubernetes deployment status
	kubectl get all -l app=$(IMAGE_NAME) -n $(NAMESPACE)

k8s-logs: ## Show Kubernetes pod logs
	kubectl logs -f -l app=$(IMAGE_NAME) -n $(NAMESPACE)

clean: ## Clean build artifacts
	rm -rf .next
	rm -rf out
	rm -rf build
	rm -rf node_modules/.cache
