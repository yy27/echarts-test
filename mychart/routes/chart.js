var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chart', { title: 'chart' });
});
router.get('/02', function(req, res, next) {
  res.render('line02', { title: '大数据量面积图' });
});
router.get('/03', function(req, res, next) {
  res.render('line03', { title: '数据是否在正常范围' });
});
router.get('/04', function(req, res, next) {
  res.render('line04', { title: '动态数据' });
});
module.exports = router;
