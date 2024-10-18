import express from 'express';
import path from 'path';
const app = express();

const PORT = 8000;
const __dirname = path.resolve();
console.log(__dirname)
// app.get("/",(req,res)=>{
//     // console.log("we got the request")
//     // res.send("")
// })

// serve static file from the public directory 


app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/src/index.html`)
})
app.listen(PORT,(error)=>{
    error?console.log(error)
    :console.log(`http://localhost:${PORT}`)
})

app.get("/get-user",(req,res)=>{

    res.json({
        firstName:"Sagar",
        lastName:"Poudel"
    })
})