pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
                
                // Build the project
                sh 'npm run build'
            }
        }
    }
}