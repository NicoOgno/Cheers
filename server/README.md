###### Use .env.example file to fill .env file.

###### In .env file:

CHEERS is the username for the admin
DBURL is the MongoDB database URL
DBPORT is the MongoDB port
SECRET_KEY is for the authentication

### Backend

- Change directory into server folder
- Following the example in .env.example, add your credentials to your .env file
- To install the backend dependencies, run:
  `npm install`
- Run the seed file to populate the database with filler data:
  `node seed`
- Start the server:
  `nodemon --> starts the node express server`
