const express = require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const app=express();
app.use(bodyParser.json());
require("dotenv/config");

//import routes
const postRoute = require("./routes/posts");
app.use("/posts",postRoute);

//database connect
mongoose.connect(
    process.env.DATABASE_CONNECT,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    ()=>console.log("connect to db")
)

//Routes

app.get("/",(req,res)=>{
    res.send("benim ilk rest api çalışmam");
});

//listening

app.listen(3000);
