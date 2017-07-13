const express = require('express');

const app = express();

const path = require('path');

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(6789, ()=>console.log("Listening on 6789"))