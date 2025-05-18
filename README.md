# 🚀 Node.js CI/CD Deployment to AWS Elastic Beanstalk

This project showcases a streamlined, automated CI/CD pipeline for deploying a Node.js Express application to AWS Elastic Beanstalk using GitHub Actions. It demonstrates best practices for modern, production-grade deployments in cloud environments.

---

## 🎯 Project Overview

* **Application Type:** Node.js Express Web Application
* **Deployment Platform:** AWS Elastic Beanstalk
* **CI/CD Tooling:** GitHub Actions
* **Objective:** Automate deployments, ensure consistency, and streamline release processes.

---

## 🛠️ Technologies Used

* **Node.js v20** – JavaScript runtime environment
* **Express.js** – Web application framework
* **AWS Elastic Beanstalk** – Managed service for web app deployments
* **GitHub Actions** – CI/CD pipeline automation
* **EB CLI** – Elastic Beanstalk command-line interface

---

## 🎬 Live YouTube Tutorial

For a comprehensive step-by-step tutorial, watch my [full video walkthrough on YouTube] https://www.youtube.com/watch?v=WEin5GTpVAk&t=1s

---

## ⚙️ CI/CD Workflow Details

The automated deployment pipeline is defined in the `.github/workflows/deploy.yml` file:

1. **Trigger** – Pipeline automatically initiates upon pushes to the `main` branch.
2. **Dependency Installation** – Installs Node.js dependencies using npm.
3. **Packaging** – Creates a zipped artifact of the application.
4. **Deployment** – Uses the EB CLI to deploy the application directly to AWS Elastic Beanstalk.

---

## 🔐 GitHub Secrets (Required)

To secure AWS credentials, set up these GitHub Secrets:

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`

---

## 📁 Project Structure

```
.
├── .github
│   └── workflows
│       └── deploy.yml
├── src
│   └── server.mjs
├── package.json
└── README.md
```

---

## 🧑‍💻 How to Use

1. Clone this repository.
2. Configure GitHub secrets with your AWS credentials.
3. Push your code to the `main` branch.
4. GitHub Actions will automatically handle the deployment.

---

## 📞 Contact

**Tom Brierley**
DevOps Engineer | Kubernetes & AWS Specialist

* [LinkedIn](https://www.linkedin.com/in/tom-brierley-6ab2b3237/)
* [TuneSmart](https://tunesmart.co.uk/)
