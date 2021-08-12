pipeline {
    agent any
    stages {

        stage("build") {
            steps {
                
                    // The build here
                    sh 'docker build --tag delivery_api .'
                 
            }
        }

        stage("deploy") {
            steps {
                sh 'docker run --rm delivery_api'
            }
        }

    }
}
