pipeline {
    agent any   // 👈 Jenkins normal primeiro

    stages {

        stage('Checkout do código') {
            steps {
                git branch: 'main', url: 'https://github.com/Ricardomms10/IrmaoTreino.git'
                sh 'ls -la'   // 👈 PROVA que o código veio
            }
        }

        stage('Build React') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root:root'
                }
            }
            steps {
                sh 'ls -la'   // 👈 TEM que aparecer package.json
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
