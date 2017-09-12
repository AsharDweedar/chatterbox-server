var additions = require('./funcs')
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 ,
  'Content-Type':'application/json'
};

var allMessages = [];
var requestHandler = function(request, response) {

//all methods that the client is allowed to request 
  var Actions = {
     POST : function (request, response) {
      //add the message to our allMessages array 
          additions.collectData (request, function(message){
            allMessages.push(message)
          });
          //response to the request 
          additions.sendResponse (response, '', 201)
     } ,
     GET : function (request, response) {
      //give him hat he wants 
      // what he wants is 'all the messages '
      additions.sendResponse ( response , allMessages );

     },
     OPTIONS : function (request, response) {
      //tell him what actions he can take in our server 'what's allowed to him '
      additions.sendResponse(response,null )
     }
  }
  
};


module.exports.requestHandler = requestHandler;

