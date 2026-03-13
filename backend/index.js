const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const PORT=5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`Server is running on port ${PORT}`);
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})