const mongoose = require('mongoose');
const food_catschema = new mongoose.Schema({});
module.exports = new mongoose.model('foodcategorys', food_catschema)