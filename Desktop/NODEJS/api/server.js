const express = require('express');
const pg = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cors = require('cors');
//const mongoose = require('mongoose');
 require('dotenv').config();
const connectDB = require('./db/db');

const pool = require('./db/Dbp');

const auth = require('./middlewares/auth');


const app = express();


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true'); // Use a string for 'true'
  next();
});
*/

const PORT = process.env.PORT || 8081;

//MONGODB CONNECTION
//console.log(process.env.MONGODB_URL);
//connectDB();

pool.connect((err, client, done) => {
  if (err) throw err;
  console.log('Connected to postgresql');
});
//API





app.use('/register',auth, require('./Router/Userpsql'));
app.use('/login',auth, require('./Router/authpsql'));




// avec mongodb
//app.use('/token', require('./Router/user'));
// app.use('/register', require('./Router/Usertoken'));
// app.use('/login', require('./Router/authtoken'));



app.use('/',( req,res)=>{
  res.status(404).json('page not found');
});

app.listen(PORT, () => {

  console.log(`votre server demarre sur http//loacalhost:${PORT}`);
});