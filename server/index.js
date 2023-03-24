const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mockData = JSON.parse(fs.readFileSync('./data/mockData.json'));

app.route('/')
    .get((req, res) => {
        // GET all times
        res.json(mockData);
    })
    .post((req, res) => {
        // Submit a new time

    });

app.listen(8080, () => {
    console.log('Server has started');
});