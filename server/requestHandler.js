var helper = require('./helper.js');
var Promise = require('bluebird');
var database = require('./databaseSQL.js');
module.exports = {
  // test: function(req,res,next){
  //   var a;
  //   helper.splitDict().then(function(data){
  //     a = data;
  //     res.json(a);
  //   });
  // },
  noWord: (req,res,next) =>{
    res.send(["Please enter a word"]);
  },
  wordSearch: (req,res,next) =>{
    var word = req.url.substr(7);
    console.log(word);
    var query = database.where({word:word.toUpperCase()});

    Promise.promisify(query.findOne)
    query.findOne().then(function(entry){
      if(!entry) {
        res.send(['Word not found'])
      }
      helper.getListOfPuns(entry).then(function(wordList){
        res.send(wordList);
      });
    });
    // console.log("HERES WORD",req.url);
    // helper.splitDict().then(function(dict){
    //   var index = dict.word.indexOf(word.toUpperCase());
    //   if( index === -1){
    //     res.send(['Word not found']);
    //   }else{
    //     res.send(helper.getListOfPuns(dict,dict.phonetic[index]));
    //   }
    // });
    // database.query('SELECT * FROM phone')

  }
}