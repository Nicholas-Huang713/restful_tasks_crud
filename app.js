const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(session({
  secret: '0713',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static( __dirname + '/public/dist/public' ));


mongoose.connect('mongodb://localhost/restful_task');
require("./server/config/mongoose");

require("./server/config/routes")(app);

app.listen(8000, ()=>{
    console.log(`Listening on PORT: 8000!`);
});