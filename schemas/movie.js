var mongoose = require('mongoose');

/*模式*/
var MovieSchema = new mongoose.Schema({
    doctor:String,
    title:String,
    language:String,
    country:String,
    summary:String,
    flash:String,
    poster:String,
    year:Number,
    flash:String,
    meta:{/*meta  createAt录入时间的记录  updateAt更新时间的记录  */
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
})

/*当每次存储数据时，都要调用该方法保存 */
MovieSchema.pre('save',function(next) {
    /*判断存储时间 是创建 还是更新*/
    if(this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now();
    }

    /*调用next 才会将存储流程走下去*/
    next();
})

/*静态方法*/

MovieSchema.statics = {
    /*取出目前数据库  所有数据*/
    fetch: function (cb) {
        return this
            .find({})/*按更新时间排序*/
            .sort('meta.updateAt')
            exec(cb)/*执行回调方法*/
    },
    /*取出单条数据*/
    findById: function (id,cb) {
        return this
            .findOne({_id:id})
            exec(cb)
    }
}

/*最后导出*/
module.exports = MovieSchema;