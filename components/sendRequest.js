var sendRequest = (query, callback) => {
  if(query.length===0){
    query = 'isindeedveryinvalid';
  }else{
    query = 'query/'+query;
  }
  $.get('http://http://45.55.145.5:1337/'+query).done(function(data){
    callback(data);
  })
}