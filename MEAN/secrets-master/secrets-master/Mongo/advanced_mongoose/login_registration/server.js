const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(6789, ()=> console.log("Listening on 6789"))