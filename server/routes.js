var helpers = require('./helper.js'); // our custom middleware
var requestHandler = require('./requestHandler.js');
var morgan = require('morgan');
module.exports = function (app, express) {

  app.use(morgan());
  app.use(express.static('../index.html'));
  app.get('/',requestHandler.noWord);
  app.get('/*',requestHandler.wordSearch);


  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

};

