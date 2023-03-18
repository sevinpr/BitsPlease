pipeline {
    agent any

    stages {
       stage('Install Homebrew') {
            steps {
                sh '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'
            }
        }

       stage('Install Node.js and npm') {
            steps {
                sh 'brew update'
                sh 'brew install node'
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
