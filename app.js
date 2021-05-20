require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');

// const users = require('./api/users');
const restaurantRouter = require('./api/restaurantRouter');
const cityRouter = require('./api/cityRouter');
const tagRouter = require('./api/tagRouter');

const errorHandler = require('./middlewares/error')
const connectDB = require('./dbinit');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('hello!!!'))

// app.use('/users', users)
app.use('/restaurant', restaurantRouter);
app.use('/city', cityRouter);
app.use('/tag', tagRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log('Started up server on http://localhost:5000'.rainbow.bold.inverse))