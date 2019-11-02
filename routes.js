var express = require('express');
var router = express.Router();
var config = require('./config')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', config);
});

// Services
router.get('/services', function (req, res, next) {
  res.render('services/index', config)
})

router.get('/services/blockchain-development', function (req, res, next) {
  res.render('services/blockchain-development', config)
})

router.get('/services/eosio', function (req, res, next) {
  res.render('services/eosio', config)
})

router.get('/services/hyperledger', function (req, res, next) {
  res.render('services/hyperledger', config)
})

router.get('/services/research', function (req, res, next) {
  res.render('services/research-and-development', config)
})

router.get('/services/smart-contract', function (req, res, next) {
  res.render('services/smart-contract', config)
})


// Solutions
router.get('/solutions/agriculture', function (req, res, next) {
  res.render('solutions/agriculture', config)
})

router.get('/solutions/automotive', function (req, res, next) {
  res.render('solutions/automotive', config)
})

router.get('/solutions/charity', function (req, res, next) {
  res.render('solutions/charity', config)
})

router.get('/solutions/education', function (req, res, next) {
  res.render('solutions/education', config)
})

router.get('/solutions/healthcare', function (req, res, next) {
  res.render('solutions/healthcare', config)
})

router.get('/solutions/insurance', function (req, res, next) {
  res.render('solutions/insurance', config)
})

router.get('/solutions/ito', function (req, res, next) {
  res.render('solutions/ito', config)
})

router.get('/solutions/legal', function (req, res, next) {
  res.render('solutions/legal', config)
})

router.get('/solutions/logistics', function (req, res, next) {
  res.render('solutions/logistics', config)
})

router.get('/solutions/real-estate', function (req, res, next) {
  res.render('solutions/real-estate', config)
})

router.get('/solutions/supply-chain', function (req, res, next) {
  res.render('solutions/supply-chain', config)
})

router.get('/solutions/retail', function (req, res, next) {
  res.render('solutions/retail', config)
})


module.exports = router;
