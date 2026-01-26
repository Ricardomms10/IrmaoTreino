pipeline {
    agent any

    stages {

        stage('Checkout do código') {
            steps {
                git branch: 'main', url: 'https://github.com/Ricardomms10/IrmaoTreino.git'
                sh 'ls -la'
            }
        }

        stage('Build React') {
            steps {
                script {
                    docker.image('node:18-alpine').inside('-u root:root') {
                        sh 'pwd'
                        sh 'ls -la'
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
