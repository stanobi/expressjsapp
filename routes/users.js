var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([ { id : 1 , name : 'name1'}, 
             { id : 2 , name : 'name2'}, 
             { id : 3 , name : 'name3'} 
           ]);
});

router.get('/:id', function(req, res, next) {
  console.log('id is => '+req.params.id);
  res.send({ id : req.params.id , name : 'sampleName'})
});

router.put('/:id', function(req, res, next) {
  console.log('id is => '+req.params.id);
  console.log('body is => '+rJSON.stringify(req.body));
  res.send({ id : req.body.id, name : req.body.name })
});

router.post('/', function(req, res, next) {
  console.log('body is => '+JSON.stringify(req.body));
  res.send({ id : req.body.id, name : req.body.name });
});

module.exports = router;
