
var orm = require("../config/orm.js");

var burger = {

	selectAll: function(callback) {
		orm.selectAll('burger', function(res) {
			callback(res);
		});
	},
	insertOne: function(columns, values, callback) {
		orm.insertOne('burger', columns, values, function(res) {
			callback(res);
		});
	},
	updateOne: function(objColVals, condition, callback) {
		orm.updateOne('burger', objColumnsValues, condition, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;