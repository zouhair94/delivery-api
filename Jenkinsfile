pipeline {
    agent any
    stages {

        stage("build") {
            steps {
                
                    // The build here
                    sh 'docker build --tag delivery_api .'
                 
            }
        }

        stage("pre-deploy") {
            steps {
                sh 'docker stop delivery-api || true && docker container rm delivery-api || true'
                
            }
        }

        stage("deploy") {
            steps {
                sh 'docker run -d -p 3000:3000 --network delivery --name delivery-api delivery_api'
            }
        }

    }
}
