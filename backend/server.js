require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Route = require('./route');
const mongoose = require('mongoose');

mongoose.connect("mongodb://admin:admin123456@ds215338.mlab.com:15338/standuplypizza", (err) => {
  if(err) console.log(err);
})

const app = express();

const PORT = 4000;
let response_url = "";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

app.use('/', Route);

app.listen(process.env.PORT || PORT, function() {
  console.log('Bot is listening on port ' + PORT);
});