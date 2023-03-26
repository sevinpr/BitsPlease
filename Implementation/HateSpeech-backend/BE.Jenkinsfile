pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Change to the correct directory
                dir('Implementation/HateSpeech-backend') {
                    // Install dependencies
                    sh 'pip install flask pandas==1.5.3 numpy flask-cors scikit-learn'
                }
            }
        }

        stage('Stop Docker Container') {
            steps {
                script {
                    try {
                        sh 'docker stop $(docker ps -q --filter ancestor=backend-app:latest || true)'
                    } catch (error) {
                        echo "Error Stopping Docker Container ${error}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Change to the correct directory
                dir('Implementation/HateSpeech-backend') {
                   sh 'docker build -t backend-app .'
                   sh 'docker run -d --network my-network --name back-end-app -p 5000:5000 backend-app'
                }
            }
        }
    }
}
