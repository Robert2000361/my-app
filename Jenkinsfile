pipeline {
    agent any

    tools {
        nodejs 'Node18'
        dockerTool 'docker-cli'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Robert2000361/my-app.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t my-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop my-app-container 2>/dev/null || true
                    docker rm   my-app-container 2>/dev/null || true
                    docker run -d --name my-app-container -p 3000:3000 my-app:latest
                '''
            }
        }
    }

    post {
        success {
            echo '✓ Pipeline passed! App is running on port 3000.'
        }
        failure {
            echo '✗ Pipeline failed. Check the stage that is red.'
        }
    }
}
