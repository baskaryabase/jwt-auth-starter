const authentication = require("./controllers/authentication");
const passportStrategy = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt",{session:false});
const requireSignin = passport.authenticate("local",{session:false})

module.exports = function(app){

  // get routes
  // app.get("/",requireAuth,function(req,res,next){
  //   res.send("hi dude")
  // })

  // post router
  // signup route
  app.post("/signin",requireSignin,authentication.signin)
  app.post("/signup",authentication.signup)

}
