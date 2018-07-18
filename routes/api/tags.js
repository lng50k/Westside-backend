var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

// return a list of tags
router.post('/', function(req, res, next) {
  Article.remove().then(() => {
    if (req.body) 
    {
      console.log(req.body)
      var article = new Article();
      article.service = req.body.service;
      article.therapy_code = req.body.therapy_code;
      article.save().then(() => {
        return res.json({success: 'success'})
      }).catch(next);
    }
  })
});

router.get('/', (req, res, next) => {
  Article.findOne(true).then((service) => {
    if (service)
      return res.json({service: service.service, therapy_code: service.therapy_code});
    return res.json({service: [], therapy_code: []})
  }).catch(next);
})

module.exports = router;
