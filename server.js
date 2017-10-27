//dependencies
var express = require('express');
var methodOverride = require ('body-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//router
var router = require('./controllers/burger_controllers'); 
app.use('/', router);

//server
var port = process.env.PORT || 3000;
app.listen(port);

