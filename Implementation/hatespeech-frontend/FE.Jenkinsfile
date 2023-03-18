pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
     stage('Example') {
          steps {
            sh 'npm config ls'
          }
        }
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
