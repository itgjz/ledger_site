

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./routes.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options') {
        res.send(200);  //让options尝试请求快速结束}
    }
    else {
        next();
    }

})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded(
    { extended: false }
));
app.use(cookieParser());

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

module.exports = app;
