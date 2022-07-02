const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.listen(process.env.PORT,() => {
    console.log('server started');
});
 