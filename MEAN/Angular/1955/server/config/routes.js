const controller = require('./../controller/controller.js');

module.exports = app => {

	// when we hit a route it checks backend first, then goes to angular; therefore we need to send to angular here.


	// api is to determine clear diff between backend routes and front end routes.
	// app.get('/', controller.index);
	app.get('/api/users', controller.index);
	// app.get('/new/:name', controller.create);
	app.post('/api/users', controller.create);
	// app.get('/remove/:name', controller.destroy);
	app.delete('/api/users/:user_id', controller.destroy);
	// app.get('/:name', controller.show);
	app.get('/api/users/:user_id', controller.show);

	// need to add app.all line for angualr
	// There are 4 http methods and app.all match them.
	// get, post, put(patch), delete
	// index.html is the root page of our single page application.
	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	});
};