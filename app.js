const express = require("express");
const app = express();

var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');





const cors = app.use("cors");
const corsOptions = require('./config/corsOptions');



passport.use(new LocalStrategy(function verify(username, password, cb) {

    // db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
    //   if (err) { return cb(err); }
    //   if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
    //   crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
    //     if (err) { return cb(err); }
    //     if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
    //       return cb(null, false, { message: 'Incorrect username or password.' });
    //     }
    //     return cb(null, row);
    //   });
    // });

  }));





app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions));

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT,
    () => console.log(`Server is running on port 4000 ${PORT}`));