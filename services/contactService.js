var models = require('../models');
var sequelize = require('../mysql');
var ContactModels = models.Contact;

// 查询所有

exports.queryAll = (query, cb) => {
    console.log(query)
}