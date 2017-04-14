var express = require('express')
var debug = require('debug')('express-lru:routes')
var router = express.Router()
var bodyParser = require('body-parser');

var cache = require('./db')

/* Router Settings */

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.all('*',function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    next();
});

router.get('/', (req, res) => {
  	res.sendStatus(200)
})

/* SET DATA */

router.post('/api/set/:key', (req, res) => {
  try {
	cache.set(req.params.key, req.body);
	res.sendStatus(200)
  } catch(e) {
	console.log(e)
	res.sendStatus(500)
  }
})

router.get('/api/set/:key/:value', (req, res) => {
  try {
	cache.set(req.params.key, req.params.value);
	res.sendStatus(200)
  } catch(e) {
	console.log(e)
	res.sendStatus(500)
  }
})

/* GET DATA */

router.get('/api/get/:key', (req, res) => {
  try {
	res.send(cache.get(req.params.key))

  } catch(e) {
	console.log(e)
	res.sendStatus(500);
  }
})

/* UNSET DATA */

router.get('/api/unset/:key', (req, res) => {
  console.log('delete',req.params.key);
  try {
	cache.del(req.params.key)
	res.sendStatus(200)
  } catch(e) {
	console.log(e)
	res.sendStatus(500)
  }
})


module.exports = app => {
  app.use('/', router)
}
