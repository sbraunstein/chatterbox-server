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

};

