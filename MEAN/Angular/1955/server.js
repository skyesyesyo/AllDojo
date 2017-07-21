const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-Parser');

// adding angular now
// express default, if you don't say where is index.html it look into static folder first.
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// end of angular stuff

// Express, mongos stuff
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json({extend:true}));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


app.listen(6789, () => console.log("Listening on 6789"));
// end of express, mongos