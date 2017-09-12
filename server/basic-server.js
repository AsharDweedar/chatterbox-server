
var http = require('http');
var handle = require('./request-handler.js')
var url = require('url')
var additions = require('./funcs')

var port = 3000;

var ip = '127.0.0.1';

var doorMan = {
	'/classes/messages': messages.requestHandler //functions
};

var server = http.createServer(function (request ,response ){
	//find the url complement 
	var doorKey = doorman[url.parse(request.url).pathname]
	//should be /classes/messages
	//if ( url comp. exist in doorman objn as a key) {
		if(doorKey){
			doorKey(request,response)
         //call the value/the function sending to it  (request ,response)
		} else {
		//call the function that sends the response 
		// which happens to be inside utile => sendResponse(params)
		  additions.sendResponse(request ,'you can\'t do that !!', 404)
	    }
	
});
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);


