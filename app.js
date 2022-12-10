const express = require('express');
const app = express();
const dotenv = require('dotenv')

app.use(express.json())
dotenv.config({path:'./config.env'})
require('./Database/connection')
const port = process.env.PORT;
app.use(require('./Router/auth'))


app.get('/',(req,res)=>{
    res.send('hi from the server')
})

app.listen(port,()=>{
    console.log(`server is running at the ${port}`);
})
