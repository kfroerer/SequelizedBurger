/* eslint-disable no-console */
var router = require("express").Router();
var db = require("../models");


router.get("/", function(request, response){
	db.burgers.findAll({}).then(function(result){
		console.log(result);
		response.render("index", 
			{
				burgers: result
			});
	});
});

router.post("/api/burgers/", function(request, response){
	console.log(request.body);
	db.burgers.create({
		burger_name: request.body.burger_name,
		devoured: false
	}).then(function(result){
		response.json(result);
	});
});

router.put("/api/burgers/", function(request, response){
	console.log(request.body);
	db.burgers.update(
		{
			text: request.body.burger_name,
			devoured: true},
		{
			where: {
				id: request.body.id
			}
		}).then(function(result){
		response.json(result);
	});
});

module.exports = router;

