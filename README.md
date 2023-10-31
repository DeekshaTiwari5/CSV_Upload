# CSV Uploader

CSV_Upload is a web application that allows users to upload and parse CSV files. The application is built with Node.js and Express, and it provides a simple and user-friendly interface for managing CSV data.


## Features

- Upload CSV files for data analysis.
- View the contents of uploaded CSV files.
- Delete uploaded CSV files.
- Perform sorting on each column (ascending and descending) in the file viewer.
- Implement file type validation for CSV files.
- Paginate data displayed in the table (maximum of 100 records per page).
- Integrate a charting library to visualize selected columns (super extra points).

## Getting Started

These instructions will help you get the project up and running on your local machine.

### Prerequisites

Make sure you have the following software/tools installed on your machine:

- Node.js and npm
- MongoDB (if you plan to use a database)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/csv-uploader.git
Navigate to the project directory:

shell
cd csv-uploader
Install dependencies:

shell

npm install
Start the server:

shell

npm start
The application should now be running at http://localhost:8000.

Usage
Access the application through your web browser at http://localhost:8000.

Click the "Upload CSV" button to upload a CSV file.

The uploaded file will appear in the list of available files.

Click on a file to view its contents in a table.

Utilize the sorting, pagination, and other features as needed.

##API Reference
CSV_Upload provides a simple API for uploading and parsing CSV files. The API supports the following endpoints:

POST /upload: Uploads a CSV file and parses the data.
GET /data: Returns the parsed CSV data as JSON.




##Configuration
You can configure database settings (if using MongoDB) in config/database.js.
Adjust validation criteria for CSV files in the file upload controller.
File Structure
/controllers: Contains controller files for handling file upload and viewing.
/models: Defines the data model for CSV files.
/public: Static assets and client-side JavaScript.
/routes: Routing for the application.
/views: EJS templates for the front-end.
Contributing
Contributions are welcome! Please follow the contribution guidelines for this project.


#Screenshots
![image](https://github.com/DeekshaTiwari5/CSV_Upload/assets/133259464/bc1ebf8e-08af-456a-acdf-d05c38c5aafa)
![image](https://github.com/DeekshaTiwari5/CSV_Upload/assets/133259464/687e4b00-3610-4bc1-b52f-49dc8d0a3219)

