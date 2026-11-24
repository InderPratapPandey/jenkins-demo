pipeline {
    agent any
    environment {
        IMAGE = "myapp:${env.BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Build Image') {
            steps { sh 'docker build -t $IMAGE .' }
        }
        stage('Test') {
            steps { sh 'docker run --rm $IMAGE npm test' }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f myapp || true'
                sh 'docker run -d --name myapp -p 3000:3000 $IMAGE'
            }
        }
    }
    post {
        success { echo 'Deployed at http://localhost:3000' }
        failure { echo 'Pipeline failed' }
    }
}
