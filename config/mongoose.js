// IMPORTING PACKAGE
const mongoose = require("mongoose");



// MAKING CONNECTION 

// Define the database connection URL
const DB = 'mongodb://localhost:27017/CSV_file_Upload';

// Attempt to connect to the MongoDB database
mongoose.connect(DB).then(() => {
    console.log('Connected to server successful!');
}).catch((err) => console.log("No connection " + err));

// Set the connection to a variable
const db = mongoose.connection;



// CHECKING CONNECTION

// Handle errors if a connection error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));

// Handle the event when the database connects successfully
db.once("open", function() {
    console.log("Successfully connected to Database");
});

// EXPORTING DB 

// Export the 'db' variable so that it can be used in other parts of your application
module.exports = db;
