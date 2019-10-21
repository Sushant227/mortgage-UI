pipeline {
    agent any 
    stages {
        stage('checkout') { 
            steps {
                git branch: 'dev', url: 'https://github.com/GitRep2018/ING-Mortgage-UI1.git'
                //git url:'https://github.com/GitRep2018/ING-Mortgage-UI1.git'
            }
        }
          stage('Build') { 
            steps {
              sh '''
              npm install
              ng build --base-href="./"
            '''
            }
        }
  stage('Deploy') { 
            steps {
                sh '''
                cd /var/lib/jenkins/workspace/pipeline/dist
                chmod -R 777 MockUseCase
                cp -rf MockUseCase /opt/apache-tomcat-9.0.26/webapps/
            '''
            }
        }
    }
}
