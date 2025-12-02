.PHONY: help dev build start docker-build docker-run docker-compose-up k8s-deploy clean

help:
	@echo "Available commands:"
	@echo "  make dev              - Start development server"
	@echo "  make build            - Build production application"
	@echo "  make start            - Start production server"
	@echo "  make docker-build     - Build Docker image"
	@echo "  make docker-run       - Run Docker container"
	@echo "  make docker-compose-up - Start with docker-compose"
	@echo "  make k8s-deploy       - Deploy to Kubernetes"
	@echo "  make clean            - Clean build artifacts"

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

docker-build:
	docker build -t nexusai-blog:latest .

docker-run:
	docker run -p 3000:3000 --name nexusai-blog nexusai-blog:latest

docker-compose-up:
	docker-compose up -d

k8s-deploy:
	kubectl apply -f kubernetes-deployment.yaml

clean:
	rm -rf .next node_modules
