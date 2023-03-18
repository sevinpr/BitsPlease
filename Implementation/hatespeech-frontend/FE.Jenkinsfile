pipeline {
    agent any

    stage('Install Node.js and npm') {
        steps {
            sh 'brew update'
            sh 'brew install node'
        }
    }
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
