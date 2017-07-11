var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){

	if(request.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			if(errors){
				console.log(errors);
			}
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === 'stylesheets/styles.css'){
		fs.readFile('stylesheets/styles.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/images/db11-1.jpg'){
		fs.readFile('./images/db11-1.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'img/jpg'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/images/db11-3.jpg'){
		fs.readFile('./images/db11-3.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'img/jpg'});
			response.write(contents);
			response.end();
		});
	}else if(request.url === '/new'){
		fs.readFile('views/new.html', 'utf8', function(erros, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}else{
		response.writeHead(404);
		response.end('File not found!');
	}
});

server.listen(6789);