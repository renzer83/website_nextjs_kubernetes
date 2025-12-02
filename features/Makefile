.PHONY: help install dev build docker-build docker-run docker-compose-up docker-compose-down k8s-deploy k8s-delete clean

# Variables
APP_NAME=nexusai-features
DOCKER_IMAGE=$(APP_NAME):latest
NAMESPACE=nexusai-features

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

dev: ## Run development server
	npm run dev

build: ## Build the Next.js application
	npm run build

lint: ## Run linting
	npm run lint

docker-build: ## Build Docker image
	docker build -t $(DOCKER_IMAGE) .

docker-run: ## Run Docker container
	docker run -p 3000:3000 --name $(APP_NAME) $(DOCKER_IMAGE)

docker-stop: ## Stop Docker container
	docker stop $(APP_NAME) || true
	docker rm $(APP_NAME) || true

docker-compose-up: ## Start services with docker-compose
	docker-compose up -d

docker-compose-down: ## Stop services with docker-compose
	docker-compose down

k8s-deploy: ## Deploy to Kubernetes
	kubectl apply -f kubernetes/

k8s-delete: ## Delete from Kubernetes
	kubectl delete -f kubernetes/

k8s-logs: ## View Kubernetes logs
	kubectl logs -f -n $(NAMESPACE) -l app=$(APP_NAME)

k8s-status: ## Check Kubernetes deployment status
	kubectl get all -n $(NAMESPACE)

clean: ## Clean build artifacts and node_modules
	rm -rf .next
	rm -rf node_modules
	rm -rf .turbo

clean-docker: ## Remove Docker images and containers
	docker-compose down -v
	docker rmi $(DOCKER_IMAGE) || true

all: install build docker-build ## Install, build, and create Docker image
