/**
 * 数据库配置文件
 */

var config = {
	debug: true,
	port: 3306,
	mysql: {
		host: '120.24.194.69',
		username: 'root',
		password: '123456',
		database: 'zhehan'
	},
	force: true, // true 删除数据表并重新创建, false 只创建没有的表
}

module.exports = config