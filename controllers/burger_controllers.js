var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {burgers: data};
		console.log(hbsObj);
		res.render('index', hbsObj);
	});
});

router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

module.exports = router;
