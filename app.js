var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');//连接数据库
var path = require('path');
var port = process.env.PORT || 3000;//设置全局变量
var app = express();//启动web服务器

/*调用数据库*/
mongoose.connect('mongodb://localhost/leying')

app.set('views', './views/pages');//设置视图的根目录
app.set('view engine', 'jade');//设置视图的模板引擎

app.use(bodyParser())//将提交表单数据 格式化
app.use(express.static(path.join(__dirname, 'bower_components')))//静态资源
app.listen(port);//监听端口
console.log(' Listening at: ' + port);


//页面路由
//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'node 首页',
        movies: [{
            title: '家有儿女',
            _id: 1,
            poster: 'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        },{
            title: '家有儿女',
            _id: 2,
            poster: 'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        },{
            title: '家有儿女',
            _id: 3,
            poster: 'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        },{
            title: '家有儿女',
            _id: 4,
            poster: 'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        },{
            title: '家有儿女',
            _id: 5,
            poster: 'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        }]
    })
})

//detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'node 详情页',
        movie: {
            title:'机械战警',
            summary:'这是第一次学习nodeJs，希望自己每天都进步一些，在技术的海洋里沉迷知识的渗透',
            flash:'http://v.youku.com/v_show/id_XMzE5MTk0NzgxMg==.html?spm=a2hww.20027244.m_250036.5~5!2~5~5!2~5~5~A',
            doctor:'阿里扎',
            year:'2014',
            country:'美国',
            language:'英语',
            poster:'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        }
    })
})

//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'node 后台',
        movie: {
            title: '机械战警',
            doctor: '',
            year: '',
            country: '',
            language: '',
            poster: '',
            summary: '',
            flash: ''
        }
    })
})

//list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'node 列表',
        movies: [{
            title: '家有儿女',
            _id: 1,
            doctor: '阿里扎',
            year: '2014',
            country: '美国',
            language: '英语',
            poster: 'https://img2.mukewang.com/5594a3540001236306000338-240-135.jpg'
        }]
    })
})