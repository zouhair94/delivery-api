pipeline {
    agent any
    stages {

        stage("build") {
            steps {
                docker
                .build('my-build-image')
                .inside("--volume=/var/run/docker.sock:/var/run/docker.sock") {
                    // The build here
                    sh 'docker --tag delivery_api .'
                }    
            }
        }

        stage("deploy") {
            steps {
                sh 'docker run --rm delivery_api'
            }
        }

    }
}
