pipeline {
    agent any
    tools{nodejs "NodeJS"}
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Cypress run') {
            steps {
                sh 'npm run allure:clear'
                sh 'npm run cy:run:allure'
            }
        }
        stage('Allure report') {
            steps {
                sh 'npm run allure:generate'
            }
        }
    }
}