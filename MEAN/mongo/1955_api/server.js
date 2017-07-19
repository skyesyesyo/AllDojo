const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(6789, () => console.log("Listening on 6789"));