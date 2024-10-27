// Importing the Express framework
const express = require('express');
const app = express(); // Creating an instance of the Express application
const port = 3000; // Defining the port number for the server

// Middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to the console
    res.status(500).send('Something went wrong!'); // Send a 500 Internal Server Error response
});

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // Send a welcome message as the response
});

// Define a route with URL parameters for greeting a user
app.get('/hello/:name/:sname', (req, res) => {
    const name = req.params.name; // Extract the 'name' parameter from the request
    const sname = req.params.sname; // Extract the 'sname' parameter from the request
    res.send(`Hello ${name} ${sname}`); // Send a personalized greeting as the response
});

// Define a route to return a list of movies as a JSON response
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ myMovies: movies }); // Send the movies array as a JSON response
});

// Importing body-parser to handle URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// Importing path module to handle file paths
const path = require('path');

// Define a route to serve an HTML file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Send the 'index.html' file as the response
});

// Define a route to greet a user using query parameters
app.get('/name', (req, res) => {
    res.send("Hello " + req.query.firstname + " " + req.query.lastname); // Send a greeting with first and last name
});

// Define a POST route to greet a user with data from the request body
app.post('/name', (req, res) => {
    res.send("Hi " + req.body.firstname + " " + req.body.lastname); // Send a greeting with first and last name from the POST request
});

// Middleware to serve static files again (redundant, since it is already defined above)
app.use(express.static('public'));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log the server start message
});
