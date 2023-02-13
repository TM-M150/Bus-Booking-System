### BUS BOOKING SERVER SYSTEM
Bus Reservation System using Javascript, React.js application and MongoDB for the database

## Starting the application
Go to the server folder and into the config folder, to connect the app to MongoDB you need to enter your MONGO_URI that exists inside the the config.env file from your MongoDB account. The one that exists there will not work.

If the config.env file does not exist, create it is inside the config folder. Add your desirable port number and MONGO_URI link on the config.env file, sample below. The MONGO_URI link below will not work. 

### `PORT = 7200`
### `MONGO_URI = mongodb+srv://inet:danny@bussystem.zilap3a.mongodb.net/?retryWrites=true&w=majority`

Enter the server directory from the termnal 

### `cd server`

In the server directory, run the following scripts

### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:3600](http://localhost:3600) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start`

Runs the server in the production mode.\
Open [http://localhost:3600](http://localhost:3600) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.