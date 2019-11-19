var express = require('express');
var api = express.Router();
var helper = require('../utils/helper')
var menus = require('../utils/menus')

// menus
api.get('/menus', (req, res, next) => {
    res.json(helper.returnInfo('success', menus))
})

module.exports = api;
