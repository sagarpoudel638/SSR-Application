import express from "express";
import path from "path";
import fs from "fs"
import { error } from "console";
const app = express();

const PORT = 8000;
const __dirname = path.resolve();
console.log(__dirname);
// app.get("/",(req,res)=>{
//     // console.log("we got the request")
//     // res.send("")
// })

// serve static file from the public directory

app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({extended:true}));
//Homepage controller
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

// user registration controller
app.get("/registration", (req, res) => {
    
  console.log("request received registration");
  res.sendFile(`${__dirname}/src/registration.html`);
});
const fileName = "userList.csv";
app.post("/registration", (req, res) => {
    
    const {name, email, password} = req.body;
    const str = `${name}, ${email}, ${password} \n`
    console.log(str)
    fs.appendFile(fileName, str, (error)=>{
        error? console.log(error)
        :
        console.log("data is written in file")
    });
  console.log("request received registration");
  res.sendFile(`${__dirname}/src/registration.html`);
});

// user login controller
app.get("/login", (req, res) => {
  console.log("request received login");
  res.sendFile(`${__dirname}/src/login.html`);
});

// app.get("/api/v1/get-user",(req,res)=>{

//     res.json({
//         firstName:"Sagar",
//         lastName:"Poudel"
//     })
// })
