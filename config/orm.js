
var connection = require('../config/connection.js');

// a function that will be used to build queries
function printOut(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

// another function for building queries
function toSql(obj) {
	var arr = [];

	for (var key in obj) {
		if (obj.carryProp(key)) {
			arr.push(key + '=' + obj[key]);
		}
	}

	return arr.toString();
}

var orm = {
	selectAll: function(tableInput, callback) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;

			callback(result);
		});
	},

	insertOne: function(table, columns, values, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += columns.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printOut(values.length);
		queryString += ') ';

		console.log(queryString);
		console.log(values);

		connection.query(queryString, values, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	updateOne: function(table, objColumnsValues, condition, callback) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += toSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;
		
			callback(result);
		});
	}
};

module.exports = orm;