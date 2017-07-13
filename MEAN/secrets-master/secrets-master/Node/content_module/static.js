var fs = require('fs');

module.exports = function(request, response){
	url_arr = request.url.split('/')
	if(url_arr[1] == 'stylesheet'){
		fs.readFile(('./stylesheet/' + url_arr[2]), 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	}
	else if(url_arr[1] == 'images'){
		fs.readFile(('./images/' + url_arr[2]), function(errors, contents){
			response.writeHead(200, {'Content-Type': 'img/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else{
		response.writeHead(404);
		response.end("Error");
	}
};