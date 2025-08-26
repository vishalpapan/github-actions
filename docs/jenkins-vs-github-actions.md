# Jenkins vs GitHub Actions - Complete Comparison

## 🏗️ Infrastructure & Setup

### Jenkins
- **Self-hosted**: Need to manage servers, updates, backups
- **Plugin management**: Install and maintain plugins manually
- **Scalability**: Need to configure master-slave architecture
- **Cost**: Server costs + maintenance time

### GitHub Actions
- **Cloud-hosted**: No infrastructure management needed
- **Built-in actions**: 1000+ pre-built actions in marketplace
- **Auto-scaling**: Automatic based on workload
- **Cost**: Free for public repos, pay-per-use for private

## 📝 Configuration Syntax

### Jenkins (Jenkinsfile)
```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
```

### GitHub Actions (YAML)
```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build
      - run: npm test
```

## 🔧 Key Concepts Mapping

| Jenkins Concept | GitHub Actions Equivalent | Description |
|----------------|---------------------------|-------------|
| Pipeline | Workflow | Complete CI/CD process |
| Stage | Job | Group of related steps |
| Step | Step | Individual command/action |
| Agent | Runner | Execution environment |
| Jenkinsfile | workflow.yml | Configuration file |
| Build Number | `github.run_number` | Unique build identifier |
| Workspace | `github.workspace` | Working directory |

## 🚀 Triggers Comparison

### Jenkins
```groovy
triggers {
    pollSCM('H/5 * * * *')  // Poll every 5 minutes
    cron('H 2 * * *')       // Daily at 2 AM
}
```

### GitHub Actions
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'     # Daily at 2 AM
  workflow_dispatch:        # Manual trigger
```

## 🔐 Secrets Management

### Jenkins
- Stored in Jenkins credential store
- Access via `credentials()` function
- Need to configure in Jenkins UI

### GitHub Actions
- Stored in GitHub repository settings
- Access via `secrets.SECRET_NAME`
- Encrypted and secure by default

## 🌟 Advantages

### Jenkins Advantages
- Full control over environment
- Extensive plugin ecosystem
- Can run anywhere (on-premise, cloud)
- Complex pipeline logic support

### GitHub Actions Advantages
- Zero infrastructure management
- Tight GitHub integration
- Matrix builds out of the box
- Rich marketplace ecosystem
- Better for open source projects

## 🎯 When to Choose What?

### Choose Jenkins When:
- Need on-premise deployment
- Complex enterprise requirements
- Existing Jenkins infrastructure
- Need custom plugins

### Choose GitHub Actions When:
- GitHub-hosted projects
- Want zero maintenance
- Rapid prototyping
- Open source projects
- Cloud-first approach

## 📊 Migration Tips

1. **Start Simple**: Begin with basic workflows
2. **Use Matrix Builds**: Replace multiple Jenkins jobs
3. **Leverage Marketplace**: Use pre-built actions
4. **Secrets Migration**: Move credentials to GitHub secrets
5. **Parallel Jobs**: Use `needs` for dependencies