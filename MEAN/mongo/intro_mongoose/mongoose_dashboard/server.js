let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));



mongoose.connect('mongodb://localhost/car_dashboard');

let CarSchema = new mongoose.Schema({
	year: {type: String, required:true},
	make: {type: String, require: true},
	model: {type: String, required: true},
	image: {type: String}
}, {timestamps:true});

mongoose.model('Car', CarSchema);
// routes in own file!
require('./server/config/routes.js')(app);

app.listen(6789, ()=> console.log("Listening on port 6789"));

