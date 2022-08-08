var express = require('express');
var router = express.Router();
var jsonFile = require('../public/json/lepidoptera.json');

/* GET lepidoptera listing. */
router.get('/', function(req, res) {
 // var result = res.json(jsonFile)
  res.render('lepidoptera.jade', { lepidopteraList: jsonFile });
});
router.get('/:id', function(req, res, next) {
  var id = +req.params.id; // will contains data from :id, the + is to parse string to integer
    //var result = jsonFile.find(u => u.id === id); // find id using .find method
    //res.send(result); // send the data
    res.render('lepidopteraSingle.jade', { lepidopteraList: jsonFile.find(u => u.id === id) });
  // etc ...
});
router.get('/commonName/:id', function(req, res, next) {
  var id = (req.params.id); // will contains data from :id
   // var result = jsonFile.find(u => u.commonName == id); // find commonName using .find method
   // res.send(result); // send the data
    res.render('lepidoptera.jade', { lepidopteraList: jsonFile.find(u => u.commonName == id)});
  // etc ...
});
router.get('/latinName/:id', function(req, res, next) {
  var id = req.params.id; // will contains data from :id
   // var result = jsonFile.find(u => u.latinName === id); // find latinName using .find method
   // res.send(result); // send the data
   res.render('lepidoptera.jade', { lepidopteraList: jsonFile.find(u => u.latinName === id) });
  // etc ...
});

module.exports = router;