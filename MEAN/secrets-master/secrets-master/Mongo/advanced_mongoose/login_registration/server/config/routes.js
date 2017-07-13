const controller = require('./../controllers/controller.js');

module.exports = app => {
	app.get('/', controller.index);
	app.post('/users', controller.createUser);
}