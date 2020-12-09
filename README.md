# Phone Catalogue

This is a phone catalogue developed with MERN Stack

## Description 🚀
This code challenge is to create a phone catalogue app from scratch. All minimum requirements are done and it Includes these parts:

-	Rest api (Node.js and express) 
-	React app (React)
- Cloud database in MongoDBAtlas
-	This public GitHub repository
-	Libraries in both react app and rest api
-	Testing rest api with mocha
-	Dockerizing rest api

### Installation 🔧
Install REST api then REACT app.
First clone the repository in your computer or download it.

REST api installation. 

Copy the .env file that I send inside PhoneCatalogue_api. Make sure that when you paste it the file name is .env

option a. If you have docker installed follow these steps
Create docker image `docker build -t <your username>/phonecatalogue-api .`
Run the image `docker run -p 4001:4001 -d <your username>/phonecatalogue-api`

option b. If you haven't docker installed follow these steps
Open a terminal in PhoneCatalogue_api folder and type `npm install`
run `npm start`

REACT app installation.
Open a terminal in PhoneCatalogue_app folder and type `npm install`
run `npm start`

### How it was done
The minimum requirements of the app are a REST API th an endpoint that returns a list of phones and a responsive REACT APP with a home page that list phones and where you could select one phone to view more info about the phone. Alsot there should be a spinner or placeholder component while the REST API request is ongoing and the app is waiting for phones data.
So that the first thing that was done was to think about the technologies with which it was going to be done. The stack MERN was chosen: Front app -> React, REST API -> Node.js and express, database -> MongoDB.

MongoDB Atlas allows us to create a database for free in the cloud, therefore we will build there the api. 

Before we start programming we think about the structure and design of the project. You can see it here: https://www.figma.com/file/m8KMmzsMBcI0sWSIowyUL9/PhoneCatalogue


## Authors ✒️
* **Belén Jiménez García** - (https://github.com/belnj)
