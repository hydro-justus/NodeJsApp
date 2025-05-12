# Node.js CI/CD Deployment to AWS Elastic Beanstalk

This project demonstrates how to deploy a Node.js Express application to AWS Elastic Beanstalk using GitHub Actions for CI/CD. It’s designed to show a production grade deployment pipeline suitable for modern cloud environments.

## Project Overview

- **Language:** Node.js (ESM)
- **Platform:** AWS Elastic Beanstalk
- **CI/CD:** GitHub Actions
- **Purpose:** Automate and simplify deployments for Node.js web applications

---

## Technologies Used

- **Node.js 20**
- **Express.js**
- **AWS Elastic Beanstalk**
- **GitHub Actions**
- **EB CLI (Elastic Beanstalk Command Line Interface)**

---

## Live YouTube Tutorial

Watch the full video walkthrough on YouTube:  

---

## 🚀 CI/CD Workflow Summary

The `.github/workflows/deploy.yml` file handles deployment:

1. Triggered on push to `main`
2. Installs dependencies
3. Zips the app
4. Deploys to Elastic Beanstalk using the EB CLI

**Required GitHub Secrets:**

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`


**About the Author**

Tom Brierley
DevOps Engineer | Kubernetes & AWS Enthusiast
https://www.linkedin.com/in/tom-brierley-6ab2b3237/
https://tunesmart.co.uk/
