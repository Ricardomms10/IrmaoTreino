pipeline {
    agent any

    stages {

        stage('Clonar código') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t irmaotreino .'
            }
        } 

        stage('Subir container') {
            steps {
                sh 'docker stop irmaotreino || true'
                sh 'docker rm irmaotreino || true'
                sh 'docker run -d -p 3000:3000 --name irmaotreino irmaotreino'
            }
        }
    }
}
