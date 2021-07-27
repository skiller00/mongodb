
const User = require("../models/user.js")

exports.adminPageController= (req,res)=>{
    User.find().then(users=>{
        res.render('admin',{
            pageTitle : "Admin",
            users:users ,
        }).catch(err=>console.log(err))
    })
}

exports.getAddUser =(req,res)=>{
    res.render('add-user',{
        pageTitle : "Add User"
    })
}

exports.postAddUser=(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const number = req.body.number;
    const avatar = req.body.avatar;
    const password = req.body.password;
    

    const user = new User({
        firstname:firstname,
        lastname:lastname , 
        email :email ,
        number: number,
        avatar : avatar ,
        password : password,
    }) ;
    user.save()
    .then(result=>{
        console.log(result) ;
        res.redirect('/admin')
    }).catch(err => console.log(err)) 
}
exports.showUsers=(req,res)=>{
    const id = req.params.id
     User.findById(id).then(result=>{
        res.render('show-users',{
            pageTitle : `${result.firstname}`,
            user:result,
        }).catch(err=>console.log(err))
    }) 
}

exports.getUpdateUser=(req,res)=>{
    const id = req.params.id
    User.findById(id).then(user=>{
        res.render('updateUser',{
            pageTitle:"UPDATE USER",
            userData:user, 
        }) 
    })
}

exports.saveUpdateUser=(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const number = req.body.number;
    const avatar = req.body.avatar;
    const password = req.body.password;
    const userId = req.body.userID ; 

    User.findById(userId).then(user=>{
        user.firstname = firstname ;
        user.lastname  = lastname ;
        user.email = email ;
        user.number = number ;
        user.avatar = avatar ;
        user.password = password ;
        return user.save()
    })
    .then(result=>{
        res.redirect('/admin')
    })
    .catch(err=>console.log(err))
}


exports.postDeleteUser=(req,res)=>{
    const userId = req.body.deleteID
    User.findByIdAndDelete(userId).then(result=>{
        res.redirect('/admin')
    })
}