const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT|| 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// POST endpoint for sending text to NLP model
app.post('/process-text', (req, res) => {
    const { text } = req.body;

    // Here, you can send the text to your NLP model for processing
    // Replace this with the actual code to interact with your NLP model

    // For demonstration purposes, we'll just log the received text
    console.log('Received text:', text);

    // Send a 204 No Content response (since you don't want a response)
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
