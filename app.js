import  express  from 'express';
import cors from 'cors';
import corsSettings from './config/corsSettings.js';
import  authRouter  from './routes/auth.js';

const app = express();



app.get("/hello",(req,res) => {
    res.status(200).json({message: "hello"});
})


app.use(cors(corsSettings));
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