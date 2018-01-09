const User = require("../models/usermodel");
const jwt = require("jwt-simple");
const config = require("../config");

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return (
    jwt.encode(
      {
       sub:user.id ,
       iat:timestamp
     },
      config.secret)
  )
}


exports.signin = function(req,res,next){

  res.send({token:tokenForUser(req.user),user:req.user})
}

exports.signup = function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;

  if(!email||!password){
    res.status(422).send({error:"checkout all field"})
  }
  // check wheather email id exists in db
  User.findOne({email:email},function(err,existingUser){
    if(err){return next(err)}

    if(existingUser){
      return res.status(422).send({error:"email is in use"})
    }
  // create user
  const user = new User({
    email:email,
    password:password
  })
  // save user
  user.save(function(err){
    if(err){return next(err)}
    res.json({token:tokenForUser(user),user:user})
  })

  })
}
