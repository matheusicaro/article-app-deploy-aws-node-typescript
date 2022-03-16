# Node with TypeScript: How to configure automatic deploy on AWS with Elastic Beanstalk

![img-1](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/1.png)
<div align="center">
[ Deploy, Node, TypeScript, Elastic Beanstalk, AWS ]
</div>
<br>
<br>

For this article, I want to demonstrate how to set up automatic deploys of a Node.js application with TypeScript on the AWS Cloud, using Elastic Beanstalk. In this way, this article will be like a tutorial, a little more direct, like a sequence of steps.


To start, you will need to have an AWS account, it is a project working correctly. I will use [this repository](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript) as an example.


On the AWS console, look for Elastic Beanstalk, and create your application as shown in the image below:


![img-2](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/2.png)
<div align="center">[ step 1 ]</div>
<br>
<br>

After creating the application, create a new environment in the sequence of images below:

![img-3](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/3.png)
<div align="center">[ step 2 ]</div>
<br>
<br>

![img-4](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/4.png)
<div align="center">[ step 3 ]</div>
<br>
<br>

Add a domain and check its availability in the region where you are working

![img-5](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/5.png)
<div align="center">[ step 4 ]</div>
<br>
<br>

![img-6](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/6.png)
<div align="center">[ step 5 ]</div>
<br>
<br>

Now, wait for the EC2 instance creation process to finish.

![img-7](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/7.png)
<div align="center">[ step 6 ]</div>
<br>
<br>

Once completed, you will see in the environment settings of your application that it was successful, and something is already running.

![img-8](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/8.png)
<div align="center">[ step 7 ]</div>
<br>
<br>

Now, let’s set up a pipeline to get our project repository. We will use the CodePipeline that you can access on the console, as shown below:

![img-9](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/9.png)
<div align="center">[ step 8 ]</div>
<br>
<br>


![img-10](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/10.png)
<div align="center">[ step 9 ]</div>
<br>
<br>


![img-11](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/11.png)
<div align="center">[ step 10 ]</div>
<br>
<br>

In the image below, connect to your Github repository:

![img-12](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/12.png)
<div align="center">[ step 11 ]</div>
<br>
<br>

Now choose which branch will receive Github events that will be sent to the pipeline. Be careful when choosing.

In this case, I will use the “master” branch, and any commit made on the master, the pipeline will be executed.

![img-13](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/13.png)
<div align="center">[ step 12 ]</div>
<br>
<br>

At this point, let’s skip the build configuration.

![img-14](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/14.png)
<div align="center">[ step 13 ]</div>
<br>
<br>

![img-15](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/15.png)
<div align="center">[ step 14 ]</div>
<br>
<br>

![img-16](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/16.png)
<div align="center">[ step 15 ]</div>
<br>
<br>

Now let’s wait for the pipeline to run for the first time.

![img-17](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/17.png)
<div align="center">[ step 16 ]</div>
<br>
<br>

After finishing, just click on the Elastic Beanstalk link to return the environment settings of our application.

![img-18](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/18.png)
<div align="center">[ step 17 ]</div>
<br>
<br>

We can see that our application did fail to upload the code directly from the master branch repository.

![img-19](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/19.png)
<div align="center">[ step 18 ]</div>
<br>
<br>

In this repository, we have a health route to get the status of the application, and it really isn’t working.

![img-20](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/20.png)
<div align="center">[ step 19 ]</div>
<br>
<br>

We were able to analyze the application logs as shown in the image below:

![img-21](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/21.png)
<div align="center">[ step 20 ]</div>
<br>
<br>

![img-22](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/22.png)
<div align="center">[ step 21 ]</div>
<br>
<br>

We were able to identify that we did not compile TypeScript. So, let’s edit our application’s package.json to execute the build in the “start” script.

![img-23](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/23.png)
<div align="center">[ step 22 ]</div>
<br>
<br>

After committing our change to the “dev” branch, and making a merge request to the “master” branch, we can see that the pipeline received an update event, and is automatically running a new deploy.

![img-24](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/24.png)
<div align="center">[ step 23 ]</div>
<br>
<br>


![img-25](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/25.png)
<div align="center">[ step 24 ]</div>
<br>
<br>

Let’s access the host of our application again:

![img-26](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/26.png)
<div align="center">[ step 25 ]</div>
<br>
<br>

![img-27](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/27.png)
<div align="center">[ step 26 ]</div>
<br>
<br>

We realized that our application is working now. Let’s configure the health route to monitor the health of our application.

Let’s access the settings as shown below:

![img-28](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/28.png)
<div align="center">[ step 27 ]</div>
<br>
<br>

![img-29](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/29.png)
<div align="center">[ step 28 ]</div>
<br>
<br>

Add a new process to detect the health route in HTTP / 80 and HTTPS / 443.

![img-30](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/30.png)
<div align="center">[ step 29 ]</div>
<br>
<br>

![img-31](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/31.png)
<div align="center">[ step 30 ]</div>
<br>
<br>

Now we can confirm that the status of our application is all ok and everything is still working.

![img-32](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/images/32.png)
<div align="center">[ step 31 ]</div>
<br>
<br>
