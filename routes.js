var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

// Services
router.get('/services', function (req, res, next) {
  res.render('services/index')
})

router.get('/services/blockchain-development', function (req, res, next) {
  res.render('services/blockchain-development')
})

router.get('/services/eosio', function (req, res, next) {
  res.render('services/eosio')
})

router.get('/services/hyperledger', function (req, res, next) {
  res.render('services/hyperledger')
})

router.get('/services/research', function (req, res, next) {
  res.render('services/research-and-development')
})

router.get('/services/smart-contract', function (req, res, next) {
  res.render('services/smart-contract')
})


// Solutions
router.get('/solutions/agriculture', function (req, res, next) {
  res.render('solutions/agriculture')
})

router.get('/solutions/automotive', function (req, res, next) {
  res.render('solutions/automotive')
})

router.get('/solutions/charity', function (req, res, next) {
  res.render('solutions/charity')
})

router.get('/solutions/education', function (req, res, next) {
  res.render('solutions/education')
})

router.get('/solutions/healthcare', function (req, res, next) {
  res.render('solutions/healthcare')
})

router.get('/solutions/insurance', function (req, res, next) {
  res.render('solutions/insurance')
})

router.get('/solutions/ito', function (req, res, next) {
  res.render('solutions/ito')
})

router.get('/solutions/legal', function (req, res, next) {
  res.render('solutions/legal')
})

router.get('/solutions/logistics', function (req, res, next) {
  res.render('solutions/logistics')
})

router.get('/solutions/real-estate', function (req, res, next) {
  res.render('solutions/real-estate')
})

router.get('/solutions/supply-chain', function (req, res, next) {
  res.render('solutions/supply-chain')
})

router.get('/solutions/retail', function (req, res, next) {
  res.render('solutions/retail')
})


module.exports = router;
