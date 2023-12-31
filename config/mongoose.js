const mongoose = require("mongoose");

const DB = 'mongodb+srv://deeksha:deeksha@csvupload.caurvxn.mongodb.net/?retryWrites=true&w=majority';

async function connectToDatabase() {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    });
    console.log('Connected to server successfully!');
  } catch (err) {
    console.error("No connection " + err);
  }
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to DB"));

db.once("open", function() {
  console.log("Successfully connected to Database");
});

module.exports = db;

connectToDatabase();
