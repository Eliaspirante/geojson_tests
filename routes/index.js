var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var MongoClient = require('mongodb').MongoClient;

	MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
		if (err) {
			throw err;
		}

		db.collection('mammals').find().toArray(function(err, result) {
			if (err) {
				throw err;
			}

			for(i = 0; i < result.length; i++){
				console.log(result[i]);
			}
			// console.log(result);
		});

		// db.collection('mammals').insert(
		// 	{
		// 		name:"Macaco",
		// 		age: 2,
		// 		habitat: "Floresta"
		// 	}
		// );
	});

	res.render('base/index', { title: 'IX Consult' });
});

module.exports = router;
