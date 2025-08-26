# GitHub Actions CI/CD Pipeline

A hands-on exploration of GitHub Actions for CI/CD automation, demonstrating the transition from Jenkins to cloud-native DevOps practices.

##  What This Project Demonstrates

### **1. Basic CI Pipeline**
- **Python Application**: Simple calculator with unit tests
- **Matrix Builds**: Testing across multiple Python versions (3.8, 3.9, 3.10)
- **Automated Testing**: pytest with coverage reporting

### **2. Advanced Docker CI/CD**
- **Node.js Application**: Express REST API with comprehensive testing
- **Multi-stage Docker Builds**: Optimized production containers
- **Security Scanning**: Trivy vulnerability assessment
- **Code Quality**: ESLint, Jest testing, CodeQL analysis
- **Automated Deployment**: Docker Hub integration with versioning

##  Pipeline Architecture

```
Code Push → Quality Gates → Security Scan → Docker Build → Image Test → Deploy
     ↓           ↓              ↓             ↓           ↓         ↓
  Checkout    ESLint         CodeQL       Multi-stage   API Test  Docker Hub
  Install     Jest Tests     npm audit    Build         Health    Versioning
  Matrix      Coverage       Trivy        Push          Check     Success
```

## Technologies Used

- **CI/CD**: GitHub Actions (YAML workflows)
- **Languages**: Python, Node.js/JavaScript
- **Testing**: pytest, Jest, ESLint
- **Security**: CodeQL, Trivy, npm audit
- **Containerization**: Docker (multi-stage builds)
- **Registry**: Docker Hub
- **Coverage**: Codecov integration

## Key Features Implemented

### **DevOps Best Practices**
-  **Infrastructure as Code**: YAML-based pipeline configuration
-  **Security First**: Multiple security scanning layers
-  **Quality Gates**: Automated code quality checks
-  **Container Security**: Non-root users, health checks
-  **Parallel Execution**: Matrix builds and job dependencies
-  **Artifact Management**: Docker image versioning and caching

### **GitHub Actions Advantages**
-  **Zero Infrastructure**: No server management required
-  **Native Integration**: Seamless GitHub ecosystem
-  **Rich Marketplace**: 1000+ pre-built actions
-  **Matrix Builds**: Built-in parallel testing
-  **Secrets Management**: Encrypted environment variables

##  Learning Outcomes

### **Jenkins vs GitHub Actions**
| Aspect | Jenkins | GitHub Actions |
|--------|---------|----------------|
| **Setup** | Complex server setup | Zero configuration |
| **Maintenance** | Manual updates/plugins | Fully managed |
| **Scaling** | Manual infrastructure | Auto-scaling |
| **Integration** | Plugin-dependent | Native GitHub integration |
| **Cost** | Infrastructure + maintenance | Pay-per-use (free for public) |

### **Technical Skills Gained**
- YAML-based pipeline configuration
- Docker multi-stage builds and security
- Automated testing and quality assurance
- Security scanning and vulnerability management
- Cloud-native CI/CD practices
- GitOps workflow implementation

## Real-World Applications

This project demonstrates enterprise-ready practices:
- **Microservices Deployment**: Container-based architecture
- **Security Compliance**: Multi-layer security scanning
- **Quality Assurance**: Automated testing and code quality
- **DevOps Automation**: End-to-end pipeline automation
- **Cloud-Native**: Serverless CI/CD infrastructure

##  Getting Started

1. **Clone Repository**: `git clone https://github.com/vishalpapan/github-actions.git`
2. **Setup Secrets**: Add Docker Hub credentials to repository secrets
3. **Trigger Pipeline**: Push changes to see automation in action
4. **Monitor Results**: Check Actions tab for pipeline execution

---

**Built with ❤️ as part of DevOps learning journey - From Jenkins to GitHub Actions**
