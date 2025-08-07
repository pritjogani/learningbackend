require('@dotenvx/dotenvx').config()
const express = require('express');
const app = express();



const port = process.env.PORT;

app.get('/' ,(req,res) =>{
    res.send("home page")
}
)
app.get("/login",(req,res) =>{
    res.send("login page")
})

app.listen(port ,  () =>{
    console.log(`app lisen sucessfully ${port} `)
})