const controller = require('./../controller/controller.js');

module.exports = app => {
	app.get('/', controller.index);
	app.get('/new/:name', controller.create);
	app.get('/remove/:name', controller.destroy);
	app.get('/:name', controller.show);
}