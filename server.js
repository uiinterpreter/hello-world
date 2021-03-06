const express = require('express');
const path = require('path');
// var request = require('request');
 
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/shree-power'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/shree-power/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
