pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "irmaotreino-app"
    }

    stages {

        stage('Clonar repositório') {
            steps {
                git 'https://github.com/Ricardomms10/IrmaoTreino'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build da aplicação') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Criar imagem Docker') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Listar imagem criada') {
            steps {
                sh 'docker images'
            }
        }
    }
}
