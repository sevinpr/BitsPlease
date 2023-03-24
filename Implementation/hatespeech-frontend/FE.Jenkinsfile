pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
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
