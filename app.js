const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const routes = require('./routes/routes');
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.json())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database..'))
  .catch(error => {
    console.log('Connection to Database failed..')
    console.log(error) 
})

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

//user routes
app.use('/', routes);

app.listen(process.env.PORT, function(req,res){
    console.log("Server is listening on post 3000");
})

