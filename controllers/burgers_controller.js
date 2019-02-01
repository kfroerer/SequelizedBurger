var router = require('express').Router();
var db = require('../models');

module.exports = function (router){

router.get("/", function(request, response){
   db.findAll({}).then(function(result){
       response.json(result);
   })
});

router.post("/api/burgers/", function(request, response){
    console.log(request.body);
    db.burgers.create({
        burger_name: request.body.text,
        devoured: false
    }).then(function(result){
        response.json(result)
    })
});

router.put("/api/burgers/", function(request, response){
    console.log(request.body)
    db.burgers.update(
        {
        text: request.body.name,
        devoured: true},
        {
        where: {
            id: request.body.id
        }
    }).then(function(result){
        response.json(result);
    });
});

};


