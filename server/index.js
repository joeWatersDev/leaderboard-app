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
        console.log(req.body)
        mockData.push(req.body)
        fs.writeFile('./data/mockData.json', JSON.stringify(mockData), 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');}
            );
        // Submit a new time
    });

app.listen(8080, () => {
    console.log('Server has started');
});