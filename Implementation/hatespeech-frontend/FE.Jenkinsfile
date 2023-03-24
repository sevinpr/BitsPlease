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
                dir('Implementation/hatespeech-frontend') {
                    // Install dependencies
                    sh 'npm install'

                    // Build the project
                    sh 'npm run build'
                }
            }
        }

        stage('Stop Docker Container') {
            steps {
                script {
                    try {
                        sh 'docker stop $(docker ps -q --filter ancestor=front-end-app:latest || true)'
                    } catch (error) {
                        echo "Error Stopping Docker Container ${error}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Change to the correct directory
                dir('Implementation/hatespeech-frontend') {
                    sh 'docker build -t front-end-app .'
                    sh 'docker run -d -p 3000:3000 front-end-app'
                }
            }
        }
    }
}
