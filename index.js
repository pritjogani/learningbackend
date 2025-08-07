require('@dotenvx/dotenvx').config()
const express = require('express');
const app = express();



const port = process.env.PORT;

const github = {
    "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
app.get('/' ,(req,res) =>{
    res.send("home page")
}
)
app.get("/login",(req,res) =>{
    res.send("login page")
})

app.get("/githubdata",(req,res) =>{
    res.json(github)
})
app.listen(port ,  () =>{
    console.log(`app lisen sucessfully ${port} `)
})