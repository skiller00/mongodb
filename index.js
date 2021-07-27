const express = require('express');
const app = express() ;
const path= require('path')
const bp = require('body-parser')
const mongoose = require('mongoose')
const homeRouter = require("./router/homeRouter")
const adminRouter = require('./router/adminRouter')
const loginRouter  = require('./router/loginRouter')


app.set('view engine','ejs')
app.set('views', 'views')

app.use(bp.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use(homeRouter)
app.use(adminRouter)
app.use(loginRouter)

app.use((req,res)=>{
    res.status(404).render('404')
})
mongoose.connect('mongodb+srv://decla:admin123@cluster0.ogmar.mongodb.net/mydb')
.then(()=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})


