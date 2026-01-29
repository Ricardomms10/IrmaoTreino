# 🚀 Irmão Treino — Docker Monitoring Stack

Aplicação React containerizada com monitoramento de containers em tempo real utilizando Prometheus, Grafana e cAdvisor.

Este projeto demonstra na prática conceitos de DevOps, Observabilidade e Infraestrutura com Docker.

## 🧠 Arquitetura
Usuário → Aplicação React (Docker)
                    ↓
               cAdvisor
                    ↓
               Prometheus
                    ↓
                 Grafana

## 🐳 Tecnologias Utilizadas

Docker — Containerização da aplicação

Docker Compose — Orquestração dos serviços

cAdvisor — Coleta de métricas dos containers

Prometheus — Armazenamento de métricas

Grafana — Visualização e dashboards

Linux (WSL) — Ambiente de execução

## 📦 Serviços da Stack
Serviço	Função
App (React)	Aplicação web
cAdvisor	Monitora CPU, RAM e recursos dos containers
Prometheus	Coleta e armazena métricas
Grafana	Exibe dashboards de monitoramento
▶️ Como executar o projeto
docker compose up -d

🌐 Acessos
Serviço	URL
Aplicação	http://localhost:3000

Prometheus	http://localhost:9090

Grafana	http://localhost:3001

cAdvisor	http://localhost:8080
🔐 Login do Grafana
Usuário: admin
Senha: admin

📊 Métricas Monitoradas

Uso de CPU dos containers

Uso de Memória (RAM)

Consumo de recursos da aplicação

Estatísticas de containers Docker

## 🎯 Objetivo do Projeto

Demonstrar habilidades práticas em:

Containerização de aplicações

Monitoramento de infraestrutura

Observabilidade de containers

Integração de ferramentas DevOps

Arquitetura de ambientes monitorados

### 🧩 Estrutura de Pastas
irmao-treino-devops/
│
├── app/                  # Aplicação React
├── Dockerfile
├── docker-compose.yml
├── monitoring/
│   └── prometheus.yml
└── README.md

## 💼 Contexto Profissional

Este projeto simula um ambiente de produção onde aplicações são:

Containerizadas

Monitoradas

Observadas em tempo real

Stack amplamente utilizada em ambientes corporativos e equipes DevOps.

### 👨‍💻 Autor

Ricardo Martins
Projeto para estudo e prática de DevOps & Observabilidade 🚀