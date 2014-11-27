var express = require('express');
var app = express();

//intiate 
app.use(express.static(__dirname + ''));
var pot = process.env.PORT || 8000;
app.listen(8000);


