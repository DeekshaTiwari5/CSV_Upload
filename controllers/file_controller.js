// IMPORTING PACKAGES/MODELS 
const fs = require('fs');                   // Import the 'fs' module for file system operations
const csvParser = require('csv-parser');     // Import the 'csv-parser' module for parsing CSV files
const CSV = require('../models/csv');        // Import a 'CSV' model (possibly defined elsewhere in your project)
const path = require('path');                // Import the 'path' module for working with file paths

//EXPORTING FUNCTION To upload a file 

module.exports.upload = async function(req, res) {
    try {
        // Check if a file was not uploaded
        if (!req.file) {
            return res.status(400).send('No files are uploaded.');
        }
        // Check if the uploaded file is not a CSV file
        if (req.file.mimetype !== "text/csv") {
            return res.status(400).send('Select CSV files only!!!');
        }
        
        // Create a record in the 'CSV' model with file details
        let file = await CSV.create({
            fileName: req.file.originalname,
            filePath: req.file.path,
            file: req.file.filename
        });
        
        // Redirect to a specified route (e.g., '/')
        return res.redirect('/');
    } catch (error) {
        console.log('Error in fileController/upload', error);
        res.status(500).send('Internal server error');
    }
}

//EXPORTING FUNCTION To open file viewer page 

module.exports.view = async function(req, res) {
    try {
        // Find a CSV record in the database by 'file' parameter from the request
        let csvFile = await CSV.findOne({ file: req.params.id });
        
        // Create arrays to store CSV data and header information
        const results = [];
        const header = [];
        
        // Read the CSV file, parse it, and store the data
        fs.createReadStream(csvFile.filePath)
        .pipe(csvParser())
        .on('headers', (headers) => {
            // Store the headers in the 'header' array
            headers.map((head) => {
                header.push(head);
            });
        })
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Render the 'file_viewer' view with CSV data, headers, and file information
            res.render("file_viewer", {
                title: "File Viewer",
                fileName: csvFile.fileName,
                head: header,
                data: results,
                length: results.length
            });
        });
    } catch (error) {
        console.log('Error in fileController/view', error);
        res.status(500).send('Internal server error');
    }
}

//EXPORTING FUNCTION To delete the file 

module.exports.delete = async function(req, res) {
    try {
        // Find a CSV record in the database by 'file' parameter from the request
        let isFile = await CSV.findOne({ file: req.params.id });

        if (isFile) {
            // Delete the CSV record from the database
            await CSV.deleteOne({ file: req.params.id });
            return res.redirect("/");
        } else {
            console.log("File not found");
            return res.redirect("/");
        }
    } catch (error) {
        console.log('Error in fileController/delete', error);
        return;
    }
}
