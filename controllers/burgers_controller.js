var router = require('express').Router();
var db = require('../models');

module.exports = function (router){

router.get("/", function(request, response){
   db.findAll({}).then(function(dbburgers){
       response.json(dbburgers);
   })
});
router.post("/api/burgers/", function(request, response){
    console.log(request.body);
    db.burgers.create({
        burger_name: request.body.burger_name,
        devoured: false
    }).then(function(dbburgers){
        response.json(dbburgers)
    })
});

router.put("/api/burgers/", function(request, response){
    db.burgers.update({
        text: request.body.burger_name,
        devoured: true},
        {
        where: {
            id: request.body.id
        }
    }).then(function(dbburgers){
        response.json(dbburgers);
    });
});

};


