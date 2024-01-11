"use strict";
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
3;
var User = require('../models/user');
// passport.use(new LocalStrategy(
// ));
passport.serializeUser(function (user, done) {
    done(null, user.id);
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
