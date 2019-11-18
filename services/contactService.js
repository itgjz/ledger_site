var models = require('../models');
var sequelize = require('../mysql');
var uuidv1 = require('uuid/v1')
var ContactModels = models.Contact;

// 查询所有
exports.queryAll = (query) => ContactModels.findAll({ offset: (query.pageNum - 1) * query.pageSize, limit: query.pageSize })

// 根据ID查询一条
exports.queryOneById = (query) => ContactModels.findAll({ where: { id: query.id } })

// 创建
exports.createContact = (params) => ContactModels.create({ id: uuidv1(), ...params })

// 删除
exports.delContactById = (query) => ContactModels.destroy({ where: { id: query.id } })

// 修改
exports.update = (params) => ContactModels.update(params, { where: { id: params.id } })

// 总数
exports.queryTotal = () => sequelize.query("select count(*) as totalCount from contacts")