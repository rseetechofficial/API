var express = require("express");
var app = express();
var cors = require('cors');
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

//mongodb connection start
mongoose.connect("mongodb://localhost/nimapinfotech",function(err){
if(err){
    console.log('The error is ',err)
}
else{
console.log('The database connected')
}
})
//mongodb connection end

//category start
var categoryRouter = require('./routes/category')
app.use('/api/admin/categories', cors(),categoryRouter)
//category end

//product start
var productRouter = require('./routes/product');
app.use('/api/admin/products', cors(), productRouter)
//product stop

app.use(cors());
app.listen(3003,function(){
    console.log('Server started')
})