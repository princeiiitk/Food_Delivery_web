
require('dotenv').config()
const mongoose = require('mongoose')
const url = 'mongodb+srv://prince:princekumar123@cluster0.iphkija.mongodb.net/food'
mongoose.connect(url, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to the mongodb");
}).catch((err) => {
    console.log(err)
})