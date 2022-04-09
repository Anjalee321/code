const mongoose = require('mongoose');
const db = require('./models');

db.Course.find()
.then(courses => {
    console.log(courses);
    process.exit();
})