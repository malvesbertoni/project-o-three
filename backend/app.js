//Requirements
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Loading requirements
const app = express();
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);




app.get('/', (req,res) => {
    res.send("Herou ord");
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => {
        console.log(">>>>connected to db.<<<<<");
});


app.listen(3000);