var passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// passport.use(new LocalStrategy(
    
     
// ));



passport.serializeUser((user,done) => {

    done(null,user.id);

});


passport.deserializeUser(async (id,done) => {
    try 
    {    
        const user = await User.findById(id);
        done(null, user);
    } 
    catch (error) {
        done(error);
    }
});

module.exports = passport;