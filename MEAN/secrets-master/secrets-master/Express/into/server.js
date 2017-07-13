let express = require('express');

let app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'static')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


require('./server/config/routes')(app);


app.listen(6789, () => console.log("Listening on port 6789"));