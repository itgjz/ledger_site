var express = require('express');
var api = express.Router();

var contact = require('../controllers/contactController');

// contact
api.get('/contact/list', contact.list)
api.post('/contact/create', contact.create)
api.delete('/contact/delete', contact.deleteById)

module.exports = api;
