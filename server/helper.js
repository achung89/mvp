var fs = require('fs');
var Promise = require('bluebird');
var dictionary = require('./databaseSQL');

module.exports = {

  splitDict: () => {
    return new Promise(function(resolve,reject) {

      fs.readFile('./phonDictionary.js','utf8', (err,data) => {
      var words = [];
        if(err){
          reject(err);
        }else{
          words = data.split('\r\n');
          var wordDict = [];
          for(var a = 0;a<words.length; a++){
            var pair;
            pair = words[a].split('  ');
            wordDict.push({word:pair[0],phonetic:pair[1]});
          }
          resolve(wordDict);
        }
      });
    });
  },
  populateMongo: () => {
    module.exports.splitDict().then((data)=>{
    var stor = data.slice();
    var size = data.length;

    var subroutineBucketSizePopulate = (arr) => {

      if(arr.length===0) {
        console.log('storing into mango was a success!')
        return;
      }
      console.log(Math.floor((size-data.length)/size*100)+'%');
      var dataInsert = arr.splice(0,(400>data.length)?data.length:400);
        dictionary.create(dataInsert, function(err, product){
          if(err){
            console.log("error Inserting",err);
          }else{
            subroutineBucketSizePopulate(data);
          }
       });

    }

    subroutineBucketSizePopulate(stor);

    });
  },
  getListOfPuns: (entry) => {
    return new Promise(function(resolve,reject){
      //console.log(entry.phonetic);
      var regSearch = new RegExp(entry.phonetic, "i");
      console.log(regSearch);

      dictionary.find({phonetic:regSearch}).exec(function(err,data) {
        if(err){
          reject(err);
        }else{
          var wordList = module.exports.convertEntriesToWords(data);
          resolve(wordList);
        }
      });
    });
  },
  convertEntriesToWords: (data)=>{
    var list = [];
    for(var a = 0; a < data.length; a++) {
        list.push(data[a].word);
    }
    return list;
  },
  errorLogger: (error, req, res, next) => {
    // log the error then send it to the next middleware in
    console.error(error.stack);
    next(error);
  },
  errorHandler: (error, req, res, next) => {
    // send error message to client
    // message for gracefull error handling on app
    res.status(500).send({error: error.message});
  }

}