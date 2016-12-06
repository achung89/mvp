var sendRequest = (query, callback) => {
  $.get('http://127.0.0.1:1337/'+query).done(function(data){
    callback(data);
  })
}