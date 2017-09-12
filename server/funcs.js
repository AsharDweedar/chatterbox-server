


module.exports.sendResponse = function(response, message, code = 200){
	response.writeHead(statusCode, headers);
	response.end(JSON.stringify( { results: message }));
}
module.exports.collectData = function(request, cb){
	var wholeMessage = '';
	request.on('data', function (pieceOfData) { // recieve the chunck :P 
        wholeMessage += pieceOfData ;
    });
	request.on('end', function(){
		cb(JSON.parse(data));
	});
}
module.exports.makeActionHandler = function(actionsAllowed){
	return function(request , response){
		var action = actionsAllowed[request.method];
		//if the methode exists in the allowed actions 
		if (action) {
		//do the action which is the value of themethod 
		// 'post : action'
		action(request, response);
	    } else {
	      exports.sendResponse(response, '', 404);
	    }
	}

}