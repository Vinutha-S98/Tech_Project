# Tech Project

This repository demonstrates a full-stack web application featuring separate modules for loan processing, backend APIs, frontend Angular apps, and containerization using Docker and kubernetes.

---

## 📁 Project Structure

```
Tech_Project/
├── backend/             # FastAPI backend for general services
├── frontend/            # Angular 19 frontend app
├── loan-backend/        # Dedicated backend for loan-related APIs
├── loan-frontend/       # Angular 19 app for loan-specific features
├── kubernetes/          # Kubernetes deployment manifests
├── docker-compose.yml   # Docker Compose configuration for local development
```

---

## 🧩 Technologies Used

- **Frontend:** Angular 19
- **Backend:** FastAPI (Python)
- **Authentication:** Auth0
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes, Helm
- **Cloud (planned):** AWS ECR + EKS

---

## 🚀 Getting Started

### Prerequisites

- Docker
- Node.js & Angular CLI
- Python 3.9+
- Kubernetes (e.g., Minikube, Docker Desktop, or cloud)
- (Optional) AWS CLI configured

---

## 📦 Backend

### Run Locally

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

- Visit: `http://127.0.0.1:8000/docs` for Swagger UI

---

## 🌐 Frontend

### Run Frontend App

```bash
cd frontend
npm install
ng serve
```

- Visit: `http://localhost:4200`

---

## 💼 Loan Module

Run the loan-related frontend/backend apps similarly from:

- `loan-backend/`
- `loan-frontend/`

---

## 🐳 Docker

```bash
docker-compose up --build
```

This spins up both frontend and backend containers locally.

---

## ☸️ Kubernetes (with Helm)

This project also uses **Helm** for templating Kubernetes deployments.

### Using Helm to Deploy

1. Navigate to the Helm chart directory (e.g., `./kubernetes/chart/`)
2. Install or upgrade the release:

```bash
helm upgrade --install tech-project ./kubernetes/chart/
```

3. Verify the deployment:

```bash
kubectl get all
```

---


Kubernetes manifests can be found in the `/kubernetes` directory. You can deploy them with:

```bash
kubectl apply -f kubernetes/
```

Use `kubectl get all` to verify deployments.

---

## 🧪 Testing

### Angular Unit Tests

```bash
ng test
```

### Backend (FastAPI) Testing

Assuming use of `pytest`:

```bash
pytest
```

---

## 📚 References

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Angular CLI Docs](https://angular.io/cli)
- [Docker Compose](https://docs.docker.com/compose/)
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

---

