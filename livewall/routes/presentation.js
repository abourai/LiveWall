'use strict';
var express = require('express');
var router = express.Router();
var uploadManager = require('./uploadManager')(router);
 
/* GET home page. */
router.get('/presentation', function(req, res) {
  res.render('presentation', { title: 'Express' });
});
 
module.exports = router;