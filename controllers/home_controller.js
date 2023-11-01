//IMPORTING PACKAGE
const File = require("../models/csv"); // Import the 'csv' model from the specified location



//EXPORTING FUNCTION To open home page 

module.exports.home = async function(req, res) {
    try {
        // Find all records in the 'csv' model (assumed to represent CSV files)
        let files = await File.find({}); // Sets a 30-second timeout

        
        // Render the 'home' view, passing the found CSV files to be displayed
        return res.render('home', {
            files: files,
            title: "Home"
        });
    } catch (error) {
        console.log('Error in homeController/home', error);
        return;
    }
}
