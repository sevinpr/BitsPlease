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

        stage('Start service') {
            steps {
                sh 'sudo systemctl stop hatespeech-frontend || true'
                sh 'sudo cp -r build/* /var/www/hatespeech-frontend'
                sh 'sudo systemctl start hatespeech-frontend'
            }
        }
    }
}
