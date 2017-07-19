const controller = require('./../controllers/controller.js');
// if there is more controllers. for example user controller
// const user = require('./../controllers/user.js');

// console.log('************************');
// console.log(controller);
// console.log('************************');



module.exports = app => {
	app.get('/', controller.index);
	app.post('/users', controller.create);
}