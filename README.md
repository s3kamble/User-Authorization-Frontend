### <u><b>User-Authorization</b></u>
- This repository contains Front-end code for User Authorization .
- This app is built using React.js ,which fetches data from backend hosted on Heroku.
- The app routes to Dasboard  only if user is logged in
- The backend is built using Node.js and uses JWT for User Authorization
<br>

### <u><b>Check app</b></u>
[Live app](https://objective-brown-08da01.netlify.app/)

### <u><b>Functionalaties</b></u>
1. Signup - Creates new User in the database
2. Login  - Existing user on successful login can access the Dashboard
<br>

### <u><b>Keywords</b></u>
- React js
- React routing
<br>

### <u><b>Prerequisite</b></u>
1. Node installed on local system.
2. Git installed on local system.
<br>

### <u><b>Usage</b></u>
1. Navigate to the directory where you want the frontend app folder to be created,Open terminal of your choice an Clone the repository
```sh
   git clone https://github.com/s3kamble/User-Authorization-Frontend.git.
```
2. On successful clone,navigate to the folder created and install the required packages by typing the following in terminal
 ```sh
   npm install
```
3. Start the app by typing
 ```sh
   npm start
```
4. The app will start in the default web browser
<br>

### <u><b>Dependencies</b></u>
- The backend is hosted on heroku and hence the frontend app can be used/checked without any dependency.

- In order to use the backend code locally,follow the steps below:
1. Navigate to the  directory where you want the backend folder to be created,Open the terminal,and type the following:
 - Clone the repo
```sh
   git clone https://github.com/s3kamble/User-Authorization-Backend.git.
```
 - Install packages
 ```sh
   npm install
```
- Start the backend server
 ```sh
   npm run start
```
- For more information,config read:
 [Readme for backend](https://github.com/s3kamble/User-Authorization-Backend/blob/master/README.md)
 <br>

2. Open the frontend app:

   a. Naviagte to Signup.jsx and use the local url instead of heroku url
   ```sh
   const url="http://localhost:3002/users/signup"
   ```
   b. Naviagte to Login.jsx and use the local url instead of heroku url.
   ```sh
   const url="http://localhost:3002/users/login"
   ```
   <br>

### <u><b>Directory-tree</b></u>
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── close.jpg
    ├── components
    │   ├── Dashboard
    │   │   └── Dashboard.jsx
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.css
    │   ├── Hamburger
    │   │   ├── Hamburger.jsx
    │   │   └── Hamburger.module.css
    │   ├── Home
    │   │   ├── Home.jsx
    │   │   └── Home.module.css
    │   ├── Login
    │   │   ├── Login.jsx
    │   │   └── Login.module.css
    │   ├── Navbar
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.module.css
    │   └── Signup
    │       ├── Signup.jsx
    │       └── Signup.module.css
    ├── index.css
    ├── index.js
    ├── logo.png
    ├── logo.svg
    ├── menu-black.jpg
    ├── reportWebVitals.js
    ├── routing
    │   ├── AppRouter.js
    │   └── protectedRoute.js
    ├── setupTests.js
    └── utils
        └── loginContext.js


```

