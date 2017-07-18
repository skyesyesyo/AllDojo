const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const session = require('express-session');



app.use(session({secret: 'coding'}));


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


// need to require mongoose before routes!
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);



app.listen(6789, () => console.log("listening on 6789"));