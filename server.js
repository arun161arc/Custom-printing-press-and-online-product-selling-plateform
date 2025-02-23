const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// MySQL Database configuration
const db = mysql.createConnection({
    host: 'localhost',  // Change this to your MySQL host
    user: 'root',       // Your MySQL username
    password: 'arun@2003',       // Your MySQL password
    database: 'PRINTPRO'  // Your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Store uploaded files in 'uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file to prevent name clashes
    }
});

const upload = multer({ storage: storage });

// Middleware to parse incoming form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  // For serving static files like HTML, CSS, JS

// Route to serve the file upload page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload and form data
app.post('/upload', upload.array('files'), (req, res) => {
    const files = req.files;
    const printType = req.body.printType;
    const colorType = req.body.colorType;
    const copies = req.body.copies;

    files.forEach(file => {
        const fileName = file.filename;
        const fileSize = file.size;
        const filePath = path.join('uploads', fileName);

        // Insert file details into MySQL database
        const sql = 'INSERT INTO uploaded_files (file_name, file_size, file_path, print_type, color_type, copies) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [fileName, fileSize, filePath, printType, colorType, copies], (err, result) => {
            if (err) {
                console.error('Error inserting file details:', err);
                return res.status(500).send('Error inserting file details.');
            }
        });
    });

    res.status(200).json({ success: true, message: 'Files uploaded successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
