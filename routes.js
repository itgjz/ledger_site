var express = require('express');
var router = express.Router();

//task
var task = require('./controllers/taskController');

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

router.get('/services/graphene-bitshares', function (req, res, next) {
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
router.get('/solutions', function (req, res, next) {
  res.render('solutions/index', gloabl)
})

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

// task
/*task list*/
router.get('/task/list', task.list);
/*task one*/
router.get('/task/one', task.getOne);

/*task mod*/
router.post('/task/mod/self', task.update);
/*admin mod*/
router.post('/task/mod/admin', task.updateAdmin);

/*task add*/
router.post('/task/add', task.add);


// router.post('/contact', function (req, res) {
//   const result = req.body;

//   var data = 'hello world\n';


//   fs.appendFile('./info.txt', data, 'utf8', function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });


//   let ret = {
//     message: {
//       captcha: 777888
//     }
//   }
//   res.json(ret)
// })


module.exports = router;
