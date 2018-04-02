var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var bcrypt = require('bcrypt');
var app = require('express-session');
//app.use(bodyparser.json());
var UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    passwordConf:{
        type:String,
        required:true,
    }
});
var User = mongoose.model('User',UserSchema);
app.use('/todos',(req,res)=>{
    var todo = new user({
        text:req.body.email
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
})
//Insert data into Mongodb
if(req.body.email && req.body.username && req.body.password && req.body.passwordConf){
    var userData = {
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        passwordConf:req.body.passwordConf
    }
    //use schema.create to insert data into the db
    User.create(userData,(err,user)=>{
        if(err){
            return next(err);
        } else {
            return res.redirect('/profile');
        }
    });
}


//hasing a password before saving it to the database
UserSchema.pre('save',function(next){
    var user = this;
    bcrypt.hash(user.password,10,function(err,hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    })
});

//use sessions for tracking logins
// app.use(session({
//    secret:'Work hard',
//    resave:true,
//    saveUninitialized:false 
// }));
module.exports = User;


