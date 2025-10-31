import express from "express";
import { ENV } from "./libs/env.js";

const app = express();

const PORT = ENV.PORT;

app.get('/',(req,res)=>{
    res.json({message:"this is home page"})
})
app.listen(PORT, (req, res) => {
  console.log(`server is running at ${PORT}`);
  console.log("hi")

});
