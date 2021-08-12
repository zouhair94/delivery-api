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
                sh 'docker stop delivery_api'
                sh 'docker container rm delivery_api'
            }
        }

        stage("deploy") {
            steps {
                sh 'docker run -d --rm -p 3000:3000 --network delivery --name delivery-api delivery_api'
            }
        }

    }
}
