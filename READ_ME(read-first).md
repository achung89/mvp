How to run:

1) run mongod on your local mongo database with 'mongod --dbpath /data/db'
2) run 'node server/server.js' in the main directory (may take 1 min to intialize)
3) once mongo is populated, run index.html
4) put in a word that you would like to punify and hit the submit button

Obstacles faced:

1) For some reason, google chrome treated my requests as cross origin, so I asked help-desk and they directed me to a chrome plugin called 'Allow-Control-Allow-Origin'

2) When populating mango with the phonetic dictionary all at once, it gave me an error saying the the memory was full. So I resorted to filling the database in 'buckets' of 400 at a time.

3) I was trying to use grunt to run mongod, run node server, populate the mongo database, and then open index.html, but it didn't allow me to open mongod asynchronously nor did it allow running individual javascript files.

How it works:

The most difficult challenge was populating mongo with the phonetic dictionary. It crashed when I did it all at once, so I filled the database in bucket sizes instead. When the server loads up, it reads the phoneticDictionary.js file using the populateMongo method and it puts the dictionary into a javascript object. Then the server will take the javascript object and insert it into the database in bucket sizes using a subroutine. Index.html will send a word to the server with a get request and the server will send back an array of pun words which react will read and dynamically render on to the page.


Extra notes:
Front end made with react, back end with express, and mongodb ORM mongoose was implemented.