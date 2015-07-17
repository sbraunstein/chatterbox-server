var utils = require('./utils');

var objectId = 1;
var messages = [
  // {
  //   username:'',
  //   message:'', 
  //   objectId: objectId
  // }
];

var actions = {
  'GET': function(request, response){
    utils.sendResponse(response, {results: messages})
  },
  'POST': function(request, response){
    utils.collectData(request, function(message){
    messages.push(message);
    message.objectId = ++objectId;
    utils.sendResponse(response, {objectId: 1}, 201)
    })
  },
  'OPTIONS': function(request, response){
  utils.sendResponse(response, null)
  }
}

module.exports = function(request, response){
  var action = actions[request.method];
  if (action){
    action(request, response);
  }
  else {
    utils.sendResponse(response, "Not Found", 404);
  }

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log("Serving request type " + request.method + " for url " + request.url);
  if(request.Url === "/classes/room1" && request.method === "GET"){
  // The outgoing status.
  var statusCode = 200;
  }
  else {
    statusCode = 404;
  }

  function RequestMessage(request) = {
    var message = "";

    request.on('data', function (){
      message += 'data'
    })

    .on('end', function(){
      var parsed = JSON.parse(message);
    } 

    responses.push(parsed);
  }
  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = "text/plain";

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end("Hello, World!");
};

