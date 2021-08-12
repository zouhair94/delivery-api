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
                sh 'docker run --rm -d -p 3000:3000 --network delivery --name delivery-api delivery-api'
            }
        }

    }
}
