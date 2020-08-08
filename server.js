const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const transaction = require('./routes/transaction');
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'});
connectDB();

const app = express();
app.use(express.json());
app.use('/api/v1/transactions', transaction);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV} mode at port ${PORT}`.blue.bold));