# upGrad eShop Project (Course 6)


## Install and Run the Project Locally on your Computer

 1. Clone this github repo in VS Code.
 2. This project requires JDK11 for backend code, NodeJS ^18.16.0 for frontend code. You also need NPM and Maven for building frontend and backend project respectively.
 3. You also need MongoDB Compass for a local Mongo Instance. Make sure the correct port is mentioned for Mongo DB Instance in application.properties file.
 4. After checking out this repo in VS code, open terminal.
 5. In Terminal, run the following commands to start backend Spring Boot based Tomcat Server at port 8080:
> cd backend-code
> mvn clean install
> java -jar .\target\ecommerce-0.0.1-SNAPSHOT.jar
6. The backend server would be up on localhost:8080
7. Open another terminal in VS Code, run the following commands to start frontend React Application at port 3000:
> cd frontend-code/upgrad-eshop
> npm install
> npm start
8. The frontend React App would be up on localhost:3000
9. As per the requirement and evaluation rubrics, the homepage would redirect you to login screen. Please signup first with a new user and update it to admin user in mongo db to add products, modify products, delete products, etc. With a normal user, you can place order, save address, etc.


## Video Demonstration
[Video Demonstration Link](https://drive.google.com/file/d/1LWacMzWPEpCi4eWkoYnlVeoorwpoCpRo/view?usp=drive_link)
