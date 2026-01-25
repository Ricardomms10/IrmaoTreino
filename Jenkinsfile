pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "irmaotreino-react"
    }

    stages {

        stage('Clonar repositório') {
            steps {
                git 'https://github.com/Ricardomms10/IrmaoTreino.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Listar imagens') {
            steps {
                sh 'docker images'
            }
        }
    }
}
