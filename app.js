const express = require("express");
const app = express();

const cors = app.use("cors");
const corsOptions = require('./config/corsOptions');


app.use(cors(corsOptions));
const PORT = process.env.PORT || 4000;



app.listen(PORT,
    () => console.log(`Server is running on port 4000 ${PORT}`));