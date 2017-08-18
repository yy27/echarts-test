var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.send('data');
});
router.get('/json/:file', function(req, res, next) {
  var file = req.params.file;
  var ajaxTest={
    tips:"you are not alone",
    file:file
  };
  var content = fs.readFileSync('./data/json/confidence-band.json',"utf-8");
  res.send(JSON.parse(content));
});

module.exports = router;