const express = require("express");
const cors = require('cors');
const app = express();

const corsOptions = require('./config/corsOptions');
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


var passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))

app.use(passport.initialize()) 

app.use(passport.session()) 











app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,
    () => console.log(`Server is running on port 4000 ${PORT}`));