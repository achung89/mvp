var helpers = require('./helper.js'); // our custom middleware
var requestHandler = require('./requestHandler.js');
var morgan = require('morgan');
var path = require('path');
var ex = require('express');
module.exports = function (app, express) {

  app.use(morgan());
  //app.use(express.static(path.join(__dirname,'../compiled')));
  app.get('/',(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../public/index.html'));
    res.status(200);
  });
    // }, (req,res,next)=>{
  //   res.sendFile(path.join(__dirname,'../public/index.js'))
  // },path.join(__dirname,'../public/index.html')
  // (req,res,next)=>{
  //   res.sendFile(path.join(__dirname,'../component/App.jsx'))
  // },path.join(__dirname,'../public/index.html')
  // (req,res,next)=>{
  //   res.sendFile(path.join(__dirname,'../component/Form.jsx'))
  // },
  // (req,res,next)=>{
  //   res.sendFile(path.join(__dirname,'../component/List.jsx'))
  // },
  // (req.res,)
  // );
  app.get('/isindeedveryinvalid',requestHandler.noWord);
  app.get('/query/*',requestHandler.wordSearch);
  app.get('/*', function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'..',req.url));
  });


  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

};

