const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const mainfakedata = require("./fakedata.json");

app.use(cors())
app.use(express.json())


async function run(){
    try{
        app.get('/traveldata',(req, res)=>{
            res.send(mainfakedata)
        })
    }finally{

    }
}

run().catch(err => console.log(err.message))

app.get('/',(req, res)=>{
    res.send('Your server is Running on 5000')
})
app.listen(port, ()=>{
    console.log('Your server is running on',port)
})
