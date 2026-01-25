pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root:root'
        }
    }

    stages {

        stage('Clonar código') {
            steps {
                git branch: 'main', url: 'https://github.com/Ricardomms10/IrmaoTreino.git'
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
    }
}
