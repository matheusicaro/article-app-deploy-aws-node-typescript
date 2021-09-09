# Simple TypeScript Starter Rest API
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/app-deploy-aws-node-typscript/blob/master/LICENSE)

## A simple repository to demonstrate automatic deployment on AWS using Elastic Beanstalk.


![Capture](https://user-images.githubusercontent.com/29001162/103491142-02ddf800-4e00-11eb-807d-fbc94e66f0c5.JPG)

# [Article](https://matheusicaro.medium.com/automatic-deployment-on-aws-for-node-js-with-typescript-b6c0797bacf8)

### Scripts

#### `npm run start`

Starts the application for deploy in CodePipeline in AWS Cloud

#### `npm run start:dev`

Starts the application in development using nodemon and ts-node to do hot reloading.

#### `npm run start:prd`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/server.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.
