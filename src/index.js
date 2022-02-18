const  express = require ("express");
const mongoose = require('mongoose');
require ("dotenv").config();
const userRouter = require('./routes/user')
 
const app = express();
const port = process.env.PORT || 9000; 

app.use(express.json());
app.use('/api', userRouter);


app.get('/',(req,res)=>{
    res.send("API");
});

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('BD OK'))
.catch((error)=> console.error(error));

app.listen(port, ()=> console.log('Servidor On', port));