const mongoose = require('mongoose');
const foodschema = new mongoose.Schema({});
module.exports = mongoose.model('food-items', foodschema);