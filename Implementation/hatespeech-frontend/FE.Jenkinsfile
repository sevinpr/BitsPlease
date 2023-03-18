pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Checkout the repository
                checkout scm
                
                // Install dependencies
                sh 'npm install'
                
                // Build the project
                sh 'npm run build'
            }
        }
    }
}
