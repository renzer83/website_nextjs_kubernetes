.PHONY: help install dev build start docker-build docker-run docker-stop k8s-deploy k8s-delete clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Run development server
	npm run dev

build: ## Build production application
	npm run build

start: ## Start production server
	npm start

docker-build: ## Build Docker image
	docker build -t nexusai-about:latest .

docker-run: ## Run Docker container
	docker-compose up -d

docker-stop: ## Stop Docker container
	docker-compose down

docker-logs: ## View Docker logs
	docker-compose logs -f

k8s-deploy: ## Deploy to Kubernetes
	kubectl apply -f k8s/deployment.yaml
	kubectl apply -f k8s/ingress.yaml
	kubectl apply -f k8s/hpa.yaml

k8s-delete: ## Delete from Kubernetes
	kubectl delete -f k8s/hpa.yaml
	kubectl delete -f k8s/ingress.yaml
	kubectl delete -f k8s/deployment.yaml

k8s-status: ## Check Kubernetes deployment status
	kubectl get pods -l app=nexusai-about
	kubectl get svc nexusai-about
	kubectl get ingress nexusai-about
	kubectl get hpa nexusai-about

clean: ## Clean build artifacts
	rm -rf .next
	rm -rf node_modules
	rm -rf out
