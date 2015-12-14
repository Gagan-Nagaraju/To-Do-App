# To-Do-App
Develop a simple To-Do Web App

A basic To-do list web application is created using the MEAN stack. The MEAN stack consists of:
1. MongoDB: A leading NoSQL database that stores the information in a JSON like format.
2. Express: A node.js web application framework providing a robust set of features for building web applications.
3. AngularJS: A javascript framework that is used as the front end for our application.
4. Node.js : A platform built on Chrome's Javascript runtime used for easily building efficient network applications.

Node.js and Express are used to build the API that is called by the AngularJS to interact with the data that is stored in our MongoDB.

MongoDB is installed on the local machine and it is used for our application. Other platforms such as EC2, Modulus, etc
can also be used to host the Database as well as the application.

#Set-Up:
1. Node.js has to be installed on the machine.
2. NPM has to be installed as well. But it will be installed along with Node.js in most of the cases.
3. MongoDB has to be installed on the local machine.

#Steps to run the app (I have used Ubuntu as my platform):
1. Clone this repository into the local machine.
2. use npm install command to install the dependencies specified in the package.json file
3. Start the MongoDB server on the local machine by opening a terminal and typing: sudo service mongod start
4. Open another terminal, go to the repository that was cloned and type: node server.js
5. The application is now listening on port 8001
6. Open the web browser and redirect to localhost:8001 and you should see the application running. The application runs as long
as the MongoDB server and the server.js are both running.

#Files contained in the repo:
1. package.json - Contains the list of dependencies that are installed when npm install is typed.
2. server.js - The main code for our node application. 
3. public directory contains two files: core.js and index.html
	core.js - file conataining the angularJS part of our application.
	index.html - HTML file that provides the front end view for the application and interacts with the AngularJS.