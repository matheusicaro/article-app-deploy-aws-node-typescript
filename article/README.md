# Node with TypeScript: How to configure automatic deploy on AWS with Elastic Beanstalk

![img-1](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/1.png)
[ Deploy, Node, TypeScript, Elastic Beanstalk, AWS ]

<br>
For this article, I want to demonstrate how to set up automatic deploys of a Node.js application with TypeScript on the AWS Cloud, using Elastic Beanstalk. In this way, this article will be like a tutorial, a little more direct, like a sequence of steps.
<br>
To start, you will need to have an AWS account, it is a project working correctly. I will use [this repository](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript) as an example.
<br>
On the AWS console, look for Elastic Beanstalk, and create your application as shown in the image below:
<br>
![img-2](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/2.png)
[ step 1 ]
<br>
After creating the application, create a new environment in the sequence of images below:
<br>
![img-3](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/3.png)
[ step 2 ]
<br>
![img-4](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/4.png)
[ step 3 ]
<br>
Add a domain and check its availability in the region where you are working
<br>
![img-5](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/5.png)
[ step 4 ]
<br>
![img-6](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/6.png)
[ step 5 ]
<br>
Now, wait for the EC2 instance creation process to finish.
<br>
![img-7](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/7.png)
[ step 6 ]
<br>
Once completed, you will see in the environment settings of your application that it was successful, and something is already running.
<br>
![img-8](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/8.png)
[ step 7 ]
<br>
Now, let’s set up a pipeline to get our project repository. We will use the CodePipeline that you can access on the console, as shown below:
<br>
![img-9](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/9.png)
[ step 8 ]
<br>
<br>
![img-10](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/10.png)
[ step 9 ]
<br>
<br>
![img-11](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/11.png)
[ step 10 ]
<br>
In the image below, connect to your Github repository:
<br>
![img-12](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/12.png)
[ step 11 ]
<br>
Now choose which branch will receive Github events that will be sent to the pipeline. Be careful when choosing.
<br>
In this case, I will use the “master” branch, and any commit made on the master, the pipeline will be executed.
<br>
![img-13](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/13.png)
[ step 12 ]
<br>
At this point, let’s skip the build configuration.
<br>
![img-14](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/14.png)
[ step 13 ]
<br>
![img-15](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/15.png)
[ step 14 ]
<br>
![img-16](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/16.png)
[ step 15 ]
<br>
Now let’s wait for the pipeline to run for the first time.
<br>
![img-17](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/17.png)
[ step 16 ]
<br>
After finishing, just click on the Elastic Beanstalk link to return the environment settings of our application.
<br>
![img-18](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/18.png)
[ step 17 ]
<br>
We can see that our application did fail to upload the code directly from the master branch repository.
<br>
![img-19](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/19.png)
[ step 18 ]
<br>
In this repository, we have a health route to get the status of the application, and it really isn’t working.
<br>
![img-20](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/20.png)
[ step 19 ]
<br>
We were able to analyze the application logs as shown in the image below:
<br>
![img-21](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/21.png)
[ step 20 ]
<br>
![img-22](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/22.png)
[ step 21 ]
<br>
We were able to identify that we did not compile TypeScript. So, let’s edit our application’s package.json to execute the build in the “start” script.
<br>
![img-23](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/23.png)
[ step 22 ]
<br>
After committing our change to the “dev” branch, and making a merge request to the “master” branch, we can see that the pipeline received an update event, and is automatically running a new deploy.
<br>
![img-24](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/24.png)
[ step 23 ]
<br>
<br>
![img-25](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/25.png)
[ step 24 ]
<br>
Let’s access the host of our application again:
<br>
![img-26](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/26.png)
[ step 25 ]
<br>
![img-27](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/27.png)
[ step 26 ]
<br>
We realized that our application is working now. Let’s configure the health route to monitor the health of our application.
<br>
Let’s access the settings as shown below:
<br>
![img-28](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/28.png)
[ step 27 ]
<br>
![img-29](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/29.png)
[ step 28 ]
<br>
Add a new process to detect the health route in HTTP / 80 and HTTPS / 443.
<br>
![img-30](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/30.png)
[ step 29 ]
<br>
![img-31](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/31.png)
[ step 30 ]
<br>
Now we can confirm that the status of our application is all ok and everything is still working.
<br>
![img-32](https://github.com/matheusicaro/article-app-deploy-aws-node-typscript/blob/master/article/32.png)
[ step 31 ]
