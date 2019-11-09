var express = require('express');
var router = express.Router();
// gloabl
var gloabl = require('./config/gloabl.config')

// data
var blockchainDevelopment = require('./data/services/blockchain-development')
var smartContract = require('./data/services/smart-contract')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', gloabl);
});

// Services
router.get('/services', function (req, res, next) {
  res.render('services/index', gloabl)
})

router.get('/services/graphene-bitshares', function(req, res, next) {
  res.render('services/graphene-bitshares', gloabl)
})

router.get('/services/blockchain-development', function (req, res, next) {
  res.render('services/blockchain-development', { ...gloabl, ...blockchainDevelopment })
})

router.get('/services/eosio', function (req, res, next) {
  res.render('services/eosio', gloabl)
})

router.get('/services/hyperledger', function (req, res, next) {
  res.render('services/hyperledger', gloabl)
})

router.get('/services/research', function (req, res, next) {
  res.render('services/research-and-development', gloabl)
})

router.get('/services/smart-contract', function (req, res, next) {
  res.render('services/smart-contract', { ...gloabl, ...smartContract })
})


// Solutions
router.get('/solutions/agriculture', function (req, res, next) {
  res.render('solutions/agriculture', gloabl)
})

router.get('/solutions/automotive', function (req, res, next) {
  res.render('solutions/automotive', gloabl)
})

router.get('/solutions/charity', function (req, res, next) {
  res.render('solutions/charity', gloabl)
})

router.get('/solutions/education', function (req, res, next) {
  res.render('solutions/education', gloabl)
})

router.get('/solutions/healthcare', function (req, res, next) {
  res.render('solutions/healthcare', gloabl)
})

router.get('/solutions/insurance', function (req, res, next) {
  res.render('solutions/insurance', gloabl)
})

router.get('/solutions/ito', function (req, res, next) {
  res.render('solutions/ito', gloabl)
})

router.get('/solutions/legal', function (req, res, next) {
  res.render('solutions/legal', gloabl)
})

router.get('/solutions/logistics', function (req, res, next) {
  res.render('solutions/logistics', gloabl)
})

router.get('/solutions/real-estate', function (req, res, next) {
  res.render('solutions/real-estate', gloabl)
})

router.get('/solutions/supply-chain', function (req, res, next) {
  res.render('solutions/supply-chain', gloabl)
})

router.get('/solutions/retail', function (req, res, next) {
  res.render('solutions/retail', gloabl)
})

router.post('/contact', function (req, res) {
  console.log(req)
  res.send("post successfully")
})


module.exports = router;
