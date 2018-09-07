const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());

// DB config

const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// use Routes
app.use('/api/items', items);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));