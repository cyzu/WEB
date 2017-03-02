var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');


var server = http.createServer(function (req, res) {
	var date = new Date();
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/html"}); 
	if (page == "/")res.write("<h1>Bienvenue</h1>");
	else if (page == "/time")res.write(date.toString());
	else if (page == "/bonjour.html" && params["prenom"] == "Michelle") res.write("Bonjour Michelle !");
	else {
		res.write("<h1>ERROR 404</h1>")
		res.statusMessage = "ERROR 404";
		res.statusCode = 404;
	}
	fs.readFile("coucou.txt", "utf-8",
	function (err,data) {
		if (err) return console.error(err);
		console.log(data);
		res.end(data);
	})
;);

server.listen(8080);

