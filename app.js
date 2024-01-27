"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors = require('cors');

var app = (0, express_1.default)();
var corsOptions = require('./config/corsOptions');
var authRouter = require("./routes/auth").authRouter;
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use('/auth', authRouter);
app.use(express_1.default.urlencoded({ extended: false }));

// app.use(session({
//   secret: "secret",
//   resave: false ,
//   saveUninitialized: true ,
// }))
// app.use(passport.initialize()) 
// app.use(passport.session()) 
app.use(function (req, res) {
    res.status(404).json({ message: 'Not Found' });
});
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () { return console.log("Server is running on port 4000 ".concat(PORT)); });
