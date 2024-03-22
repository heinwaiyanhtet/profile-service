import  express  from 'express';
import cors from 'cors';
import corsSettings from './config/corsSettings';
import  {router as authRouter}  from './routes/auth.route';
import prisma from "./services/prisma.js";


const app = express();

app.use(cors(corsSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function main() {
    app.use('/api',authRouter);
    
    app.use((req, res) => 
    {
        res.status(404).json({ message: 'Not Found' });
    });
}

main()
  .then(async () => {
      await prisma.$disconnect()
  })
  .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
  })


const PORT = process.env.PORT || 4000;
app.listen(PORT,
    () => console.log(`Server is running on port 4000 ${PORT}`));