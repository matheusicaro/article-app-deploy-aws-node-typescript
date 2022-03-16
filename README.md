# Simple Article with a Starter Rest API with Node.js and TypeScript
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/app-deploy-aws-node-typscript/blob/master/LICENSE)
 
## A simple article and project to demonstrate automatic deployment on AWS using Elastic Beanstalk.

### [Article - Node with TypeScript: How to configure automatic deploy on AWS with Elastic Beanstalk](https://matheusicaro.medium.com/automatic-deployment-on-aws-for-node-js-with-typescript-b6c0797bacf8)

![Capture](https://user-images.githubusercontent.com/29001162/103491142-02ddf800-4e00-11eb-807d-fbc94e66f0c5.JPG)

---

## Project Specifications

#### BACK-END

- Used **[Node.js](https://nodejs.org/en/)** with:
    - **[TypeScript](https://www.typescriptlang.org/)**
    - **[express](https://expressjs.com/)**
- Used **[Jest](https://jestjs.io/)** for unit testing.
- Used **[Winston](https://typicode.github.io/husky/#/)** for the storage of the logs.
- Used **[Axios](https://axios-http.com/)** for promises based HTTP client.
#### CLOUD

- Used **[AWS BeanStalk](https://aws.amazon.com/elasticbeanstalk/)** as an orchestration service for deploying cloud applications.
- Used **[AWS EC2](https://aws.amazon.com/ec2/)** as cloud instances for application availability.
- Used **[AWS CodeDeploy](https://aws.amazon.com/codedeploy/)** as a fully managed deployment service that automates application deployments.
- Used **[AWS CodePipeline](https://aws.amazon.com/codepipeline/)** as a continuous delivery service for the application build, test and deployment phases
- Used **[AWS CodeCommit](https://aws.amazon.com/codecommit/)** as source control service.
