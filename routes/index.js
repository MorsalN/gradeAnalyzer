const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('gradeanalyzer');
});

router.get('/grades', function(req, res, next) {
  res.render('finalgrades');
});

module.exports = router;