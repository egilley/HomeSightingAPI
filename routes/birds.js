var express = require('express');
var router = express.Router();
var jsonFile = require('../public/json/birds.json');

/* GET birds listing. */
router.get('/', function(req, res, next) {
  res.render('birds.jade', { birdList: jsonFile });
});
router.get('/:id', function(req, res, next) {
  var id = +req.params.id; // will contains data from :id, the + is to parse string to integer
    //var result = jsonFile.find(u => u.id === id); // find id using .find method
    //res.send(result); // send the data
    res.render('birdSingle.jade', { birdList: jsonFile.find(u => u.id === id) });
  // etc ...
});
router.get('/commonName/:id', function(req, res, next) {
  var id = (req.params.id); // will contains data from :id
  res.render('birdSingle.jade', { birdList: jsonFile.find(u => u.commonName === id) });
  // etc ...
});
router.get('/latinName/:id', function(req, res, next) {
  var id = req.params.id; // will contains data from :id
    var result = jsonFile.find(u => u.latinName === id); // find latinName using .find method
    res.send(result); // send the data
  // etc ...
});

module.exports = router;