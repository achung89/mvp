var express = require('express');
var helper = require('./helper.js');
var dictionary = require('./databaseSQL');



var app = express();

// configure our server with all the middleware and routing



require('./routes.js')(app, express);



dictionary.remove({}, function(err) {
   console.log('collection removed');
   console.log("populating");
   helper.populateMongo();
});

// start listening to requests on port 1337
app.listen(1337,(err) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Server listening on', 1337);
  }
});
console.log('AFTER LISTEN');
// export our app for testing and flexibility, required by index.js
module.exports.app = app;