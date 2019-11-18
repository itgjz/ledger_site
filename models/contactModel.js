var Sequelize = require('sequelize');
var sequelize = require('../mysql');

var Contact = sequelize.define('contact', {
    id: {
        type: Sequelize.STRING(200),
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: "姓名"
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: "邮箱"
    },
    company: {
        type: Sequelize.SMALLINT(60),
        allowNull: false,
        comment: "公司"
    },
    tel: {
        type: Sequelize.SMALLINT(11),
        allowNull: true,
        comment: "电话号码"
    },
    question: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "问题"
    }
});

module.exports = Contact