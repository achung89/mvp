
var mongo = require('mongoose');
var helper = require('./helper');


mongo.Promise = global.Promise;

mongo.connect('mongodb://127.0.0.1/27017');

mongo.connection.on('error', console.error.bind(console, 'connection:error'));
mongo.connection.once('open', console.log.bind(console, 'CONNECTION:SUCCESS'));


var dict = mongo.Schema({
  word: String,
  phonetic: String
});

var dictionary = mongo.model('dictionary',dict);



module.exports = dictionary;
