var passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;3
const User = require('../models/user');

// passport.use(new LocalStrategy(
    
     
// ));



passport.serializeUser((user: { id: any; },done: (arg0: null, arg1: any) => void) => {

    done(null,user.id);

});


// passport.deserializeUser(async (id: any,done: (arg0: unknown, arg1: undefined) => void) => {
//     try 
//     {    
//         const user = await User.findById(id);
//         done(null, user);
//     } 
//     catch (error) {
//         done(error);
//     }
// });

module.exports = passport;