var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

router.get('/', async function(req, res, next) {
    const courses = await db.Course.find().sort({courseid: 1});
  res.render('index', { title: 'Express' });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
