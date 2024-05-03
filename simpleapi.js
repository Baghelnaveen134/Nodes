const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())

app.get("/",(req,res) => {
    res.end("Hello World")
})

const userdetails=[];

app.get("/name/:myname",(req,res) => {
    res.end("welcome" + req.params.myname)
})

app.post("/login",(req,res) =>{
    const body = req.body;
    const username = body.username;
    const pass = body.pass;

    if (username === "naveen" && pass === 123)
    res.json({
        data : "Success"

    })
    else
        res.end("Incorrect Creds")
})

app.post("/register",(req,res)=>{
    const body=req.body;
    const username=body.username;
    const pass=body.params;
    const address=body.address;
    const email=body.email;
    userdetails[0]=username;
    userdetails[1]=pass;
    userdetails[2]=address;
    userdetails[3]=email;
    res.end("Registered successfully")

})

app.get("/get-user/:myname",(req,res) => {
    const name=req.params.myname;
    if(name==userdetails[0]){
        res.json({
            "pass":userdetails[1],
            "Adderss":userdetails[2],
            "Email":userdetails[3]
        })
    }
    else{
        res.end("User not found")
    }

})

//http://localhost:8080/
app.listen(8080, () => console.log("Application started"))