const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    return res.send("Hii from the server")
})

app.listen(PORT, ()=>console.log(`Server started at ${PORT}`)
)


