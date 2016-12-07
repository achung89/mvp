var sendRequest = (query, callback) => {
  if(query.length===0){
    query = 'isindeedveryinvalid';
  }else{
    query = 'query/'+query;
  }
  $.get('http://127.0.0.1:1337/'+query).done(function(data){
    callback(data);
  })
}