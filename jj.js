const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let registrations = [];
let orders = [];

app.post('/register', (req, res) => {
    const { firstName, lastName, cellphone } = req.body;
    registrations.push({ firstName, lastName, cellphone });
    res.status(200).send('Registration successful');
});

app.post('/order', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(200).send('Order received');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
