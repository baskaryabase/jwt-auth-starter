# jwt auth starter Project

1.[Running server seperately](#running-server-seperately)<br/>

2.[Integrating the server with the working project](#integrating-the-server-with-the-working-project)<br/>

3.[API Endpoints](#api-endpoints-for-auth)



## running server seperately
1.clone the repository<br/>
`git clone https://github.com/smilysyndrella/jwt-auth-starter`

2.change directory to cloned repo<br/>
`cd jwt-auth-starter`

3.install all the dependencies<br/>
`npm i or yarn install`

4.start the server by running <br/>
`npm start or yarn start`

## integrating the server with the working project
1.import the router(component name ur choice) function from the ./router.js

2.use the router function inside the main server file or the api file of the project<br/>
  and pass app as a parameter
  

## Api endpoints for auth 
1. "/signup"<br/>
   - method(post)<br/>
   creates user account with following credentials in json payload and serves token and authenticates user<br/>
     - username
     - password
     - email

2. "/signin"<br/>
   - method(post)<br/>
   allows user to sign in and serves token and user credentials with following details in json payload<br/>
     - username or email
     - password

3. "/auth"<br/>
   - method(get)<br/>
   verifies jwt token and authenticates user with token in header
     - header
       - authorization(token)
     
4. "/create-forgot-password-link"<br/>
   - method(post)<br/>
   allows user to generate forgot password link and sends to email id<br/>
   with following credentials in json payload
     - email
