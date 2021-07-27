
const User = require("../models/user.js")

exports.loginPageController = (req,res)=>{
    res.render('login',{
        pageTitle : "LOGIN"
    })
}

exports.postLoginController =(req,res)=>{
    const email = req.body.email ;
    const password  = req.body.password
    User.findOne({email:email}).then(user=>{
        if(user.password === password){
            res.redirect('/')
        }else{
            res.redirect('login')
        }
    })
    
}

