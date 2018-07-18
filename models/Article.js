var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var ArticleSchema = new mongoose.Schema({
  service: [],
  therapy_code: []
}, {timestamps: true});

mongoose.model('Article', ArticleSchema);
