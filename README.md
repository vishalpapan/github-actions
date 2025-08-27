# GitHub Actions CI/CD Pipeline

A comprehensive exploration of GitHub Actions for CI/CD automation, demonstrating **GitHub-hosted**, **self-hosted**, and **manual trigger** workflows.

<img width="3557" height="983" alt="Githubactions-blockdiagram" src="https://github.com/user-attachments/assets/263f6842-6806-4875-a0be-b45165df67cf" />

##  Workflow Strategy

### **1. GitHub-Hosted Runner** (`docker-ci-cd.yml`)
- **Triggers**: Push/PR to `examples/docker-app/**`
- **Execution**: Cloud-based GitHub runners
- **Use Case**: Standard builds, zero maintenance

### **2. Self-Hosted Runner** (`docker-ci-cd-self-hosted.yml`)
- **Triggers**: Push/PR to `examples/python-app/**`
- **Execution**: Private infrastructure (AWS EC2 Instance)
- **Use Case**: Performance optimization, dedicated resources

### **3. Manual Trigger** (`docker-self-hosted.yml`)
- **Triggers**: Manual execution only
- **Execution**: Self-hosted runner AWS EC2 Instance)
- **Use Case**: On-demand testing, environment selection

##  How to Execute Workflows

### **Automatic Triggers:**
- **GitHub-hosted**: Push changes to `examples/docker-app/`
- **Self-hosted**: Push changes to `examples/python-app/`

### **Manual Trigger Steps:**
1. Go to **Actions** tab in GitHub repository
2. Select **"Docker CI/CD - Self-Hosted Runner"**
3. Click **"Run workflow"** button (top right)
4. Choose environment (staging/production)
5. Select branch and click **"Run workflow"**

##  Runner Comparison

| Feature | GitHub-Hosted | Self-Hosted | Manual |
|---------|---------------|-------------|---------|
| **Trigger** | `docker-app/` changes | `python-app/` changes | Manual only |
| **Setup** | Zero config | Requires setup | Pre-configured |
| **Performance** | Standard | 30% faster | Optimized |
| **Cost** | Pay per minute | Fixed cost | On-demand |
| **Use Case** | Standard CI/CD | High performance | Testing/Staging |

##  Repository Structure

```
├── .github/workflows/
│   ├── basic-ci.yml                    # Python CI pipeline
│   ├── docker-ci-cd.yml               # GitHub-hosted (docker-app trigger)
│   ├── docker-ci-cd-self-hosted.yml   # Self-hosted (python-app trigger)
│   └── docker-self-hosted.yml         # Manual trigger only
├── examples/
│   ├── python-app/                     # Triggers self-hosted workflow
│   ├── docker-app/                     # Triggers GitHub-hosted workflow
│   └── k8s-app/                        # Future examples
└── docs/
```

##  Technologies Used

- **CI/CD**: GitHub Actions (YAML workflows)
- **Infrastructure**: GitHub-hosted + Self-hosted runners
- **Languages**: Python, Node.js/JavaScript
- **Testing**: pytest, Jest, ESLint
- **Security**: CodeQL, Trivy, npm audit
- **Containerization**: Docker (multi-stage builds)
- **Registry**: Docker Hub with versioning

##  Performance Metrics

### **GitHub-Hosted Runners:**
- **Build Time**: 3-4 minutes average
- **Trigger**: Automatic on `docker-app/` changes
- **Cost**: $0.008/minute for private repos

### **Self-Hosted Runners:**
- **Build Time**: 2-3 minutes average (30% faster)
- **Trigger**: Automatic on `python-app/` changes
- **Cost**: Fixed infrastructure cost

### **Manual Trigger:**
- **Build Time**: 2-3 minutes (self-hosted performance)
- **Trigger**: On-demand execution
- **Use Case**: Environment-specific deployments

##  Key Learning Outcomes

### **Workflow Trigger Strategy:**
- **Path-based triggers**: Different folders trigger different runners
- **Manual triggers**: On-demand execution for testing
- **Hybrid approach**: Combine automatic and manual workflows

### **Runner Selection:**
- **GitHub-hosted**: Standard development workflows
- **Self-hosted**: Performance-critical builds
- **Manual**: Staging/production deployments

##  Getting Started

### **Test GitHub-Hosted Pipeline:**
```bash
# Make changes to docker-app
echo "// Updated" >> examples/docker-app/server.js
git add . && git commit -m "Test GitHub-hosted runner"
git push
```

### **Test Self-Hosted Pipeline:**
```bash
# Make changes to python-app
echo "# Updated" >> examples/python-app/app.py
git add . && git commit -m "Test self-hosted runner"
git push
```

### **Test Manual Pipeline:**
1. Go to GitHub Actions tab
2. Select "Docker CI/CD - Self-Hosted Runner"
3. Click "Run workflow"
4. Choose environment and run

### Test Run:

GitHub Actions UI showing self runner is as active (when jobs are running)

<img width="1895" height="695" alt="github-actions-self-hosted-runner-running" src="https://github.com/user-attachments/assets/ce4e9f73-a011-4272-8f3b-4f7370d0a6ae" />

Jobs Running on self host runner. 
 
<img width="1087" height="270" alt="image" src="https://github.com/user-attachments/assets/d9a74fe9-1f2f-4358-a139-125479375806" />





**Built with ❤️ - Mastering GitHub Actions across Cloud and Self-Hosted Infrastructure**
