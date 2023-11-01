// IMPORTING PACKAGES
const mongoose = require("mongoose");

// MAKING CONNECTION 

// Define the database connection URL
const DB = 'mongodb://127.0.0.1./CSV_file_Upload';

// Attempt to connect to the MongoDB database
mongoose.connect(DB, {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true, // Use the new server discovery and monitoring engine
}).then(() => {
  console.log('Connected to the database successfully!');
}).catch((err) => {
  console.error("Connection to the database failed:", err);
  process.exit(1); // Exit the application on connection failure
});

// Set the connection to a variable
const db = mongoose.connection;

// CHECKING CONNECTION

// Handle errors if a connection error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));

// Handle the event when the database connects successfully
db.once("open", function() {
  console.log("Successfully connected to the database");
});

// EXPORTING DB 

// Export the 'db' variable so that it can be used in other parts of your application
module.exports = db;
