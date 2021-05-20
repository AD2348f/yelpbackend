require('dotenv').config();
require('colors');
const express = require('express');
const path = require('path');
const cors = require('cors');

// const users = require('./api/users');
const restaurants = require('./api/restaurants');
const cities = require('./api/cities');
const tags = require('./api/tags');

const errorHandler = require('./middlewares/error')
const connectDB = require('./dbinit');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => res.send('hello!!!'))

// app.use('/users', users)
app.use('/restaurants', restaurants);
app.use('/cities', cities);
app.use('/tag', tags);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log('Started up server on http://localhost:5000'.rainbow.bold.inverse))