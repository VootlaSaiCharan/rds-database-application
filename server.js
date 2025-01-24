const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;

// Create connection to the database
const db = mysql.createConnection({
    host: 'my-first-database.c7w0uas0gj36.us-east-1.rds.amazonaws.com', // replace with your RDS endpoint
    user: 'root',
    password: 'password', // Replace with your actual password
    database: 'charandb', // Replace with your actual database name
    port: 3306
});

// Connect to the database
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Create an API endpoint to fetch users data
app.get('/api/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
