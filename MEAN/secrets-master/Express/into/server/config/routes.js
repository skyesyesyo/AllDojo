module.exports = function(app){
	app.get('/', (req, res) => {
		res.render('index', {name: 'Kobe Bryant', email: 'kobe@lakers.com'})
	});
	app.get('/users', (req, res) => {
		var users_array = [
	        {name: "Michael", email: "michael@codingdojo.com"}, 
	        {name: "Jay", email: "jay@codingdojo.com"}, 
	        {name: "Brendan", email: "brendan@codingdojo.com"}, 
	        {name: "Andrew", email: "andrew@codingdojo.com"}
	    ];
		res.render('users', {users: users_array})
	})
}