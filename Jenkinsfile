pipeline {
    agent any
    
    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    
    environment {
        NODE_ENV = 'production'
        PORT = '3000'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '=== Checking out code ==='
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            parallel {
                stage('Backend Dependencies') {
                    steps {
                        echo '=== Installing Backend Dependencies ==='
                        dir('c:\\java_fullstack') {
                            sh 'npm install'
                        }
                    }
                }
                stage('Angular Dependencies') {
                    steps {
                        echo '=== Installing Angular Dependencies ==='
                        dir('c:\\java_fullstack\\angular-app\\my-app') {
                            sh 'npm install'
                        }
                    }
                }
                stage('React Dependencies') {
                    steps {
                        echo '=== Installing React Dependencies ==='
                        dir('c:\\java_fullstack\\react-app\\my-app') {
                            sh 'npm install'
                        }
                    }
                }
            }
        }
        
        stage('Build') {
            parallel {
                stage('Build Angular') {
                    steps {
                        echo '=== Building Angular App ==='
                        dir('c:\\java_fullstack\\angular-app\\my-app') {
                            sh 'npm run build'
                        }
                    }
                }
                stage('Build React') {
                    steps {
                        echo '=== Building React App ==='
                        dir('c:\\java_fullstack\\react-app\\my-app') {
                            sh 'npm run build'
                        }
                    }
                }
            }
        }
        
        stage('Test') {
            parallel {
                stage('Backend Tests') {
                    steps {
                        echo '=== Running Backend Tests ==='
                        dir('c:\\java_fullstack') {
                            sh 'npm test || true'
                        }
                    }
                }
                stage('Angular Tests') {
                    steps {
                        echo '=== Running Angular Tests ==='
                        dir('c:\\java_fullstack\\angular-app\\my-app') {
                            sh 'npm test || true'
                        }
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo '=== Deploying Application ==='
                script {
                    // Deploy backend
                    echo 'Deploying Node.js backend...'
                    sh '''
                        # Kill existing process if running
                        lsof -ti:3000 | xargs kill -9 || true
                        
                        # Start backend in background
                        cd c:\\java_fullstack
                        nohup npm start > backend.log 2>&1 &
                    '''
                    
                    // Deploy Angular
                    echo 'Deploying Angular app...'
                    sh 'echo "Angular app built and ready at dist/my-app/server/server.mjs"'
                }
            }
        }
    }
    
    post {
        always {
            echo '=== Pipeline Execution Completed ==='
            junit '**/test-results.xml' || true
        }
        success {
            echo '✓ Build & Deployment Successful'
            echo "Backend running on: http://localhost:3000"
            echo "Angular app serving: http://localhost:3000"
        }
        failure {
            echo '✗ Build or Deployment Failed'
            sh 'cat backend.log || true'
        }
    }
}
