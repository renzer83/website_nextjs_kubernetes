.PHONY: help install dev build start docker-build docker-run docker-stop clean

help:
	@echo "NexusAI Contact Page - Available Commands"
	@echo "=========================================="
	@echo "make install       - Install dependencies"
	@echo "make dev          - Run development server"
	@echo "make build        - Build production bundle"
	@echo "make start        - Start production server"
	@echo "make docker-build - Build Docker image"
	@echo "make docker-run   - Run Docker container"
	@echo "make docker-stop  - Stop Docker container"
	@echo "make clean        - Clean build artifacts"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm start

docker-build:
	docker build -t nexusai-contact:latest .

docker-run:
	docker run -d -p 3000:3000 --name nexusai-contact nexusai-contact:latest

docker-stop:
	docker stop nexusai-contact || true
	docker rm nexusai-contact || true

docker-compose-up:
	docker-compose up -d

docker-compose-down:
	docker-compose down

clean:
	rm -rf .next
	rm -rf node_modules
	rm -rf out
