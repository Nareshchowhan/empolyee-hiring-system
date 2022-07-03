const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();
const authroutes = require('./routes/auth.routes');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(authroutes);

app.listen(process.env.PORT,() => {
    console.log('server started');
});
 