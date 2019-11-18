/*Sequelize mysql*/
var config = require('./config/database.config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: 'mysql'
    }
);

sequelize
    .authenticate()
    .then(() => {
        let force = config.force
        console.log('=====>数据库连接成功！');
        console.log('=====>开始自动迁移，当前迁移模式为：' + (force ? '删除数据表并重新创建' : '只创建没有的表'))
        sequelize.sync({ force })
    })
    .catch(err => {
        console.error('数据库连接失败:', err);
    });

module.exports = sequelize;