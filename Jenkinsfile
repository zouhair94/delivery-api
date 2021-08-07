pipeline {
    agent any
    stages {

        stage("build") {
            steps {
                sh 'docker -t delivery_api .'
            }
        }

        stage("deploy") {
            steps {
                sh 'docker run --rm delivery_api'
            }
        }

    }
}
