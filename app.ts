import  express  from 'express';
const cors = require('cors');
const app = express();
const corsOptions = require('./config/corsOptions');
const { authRouter } = require("./routes/auth");



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth',authRouter);

app.use((req, res) => 
{
    res.status(404).json({ message: 'Not Found' });
});



const PORT = process.env.PORT || 4000;

app.listen(PORT,
    () => console.log(`Server is running on port 4000 ${PORT}`));