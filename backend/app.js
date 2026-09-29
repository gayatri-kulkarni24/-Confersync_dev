import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./src/controllers/socketManager.js";
import cors from "cors";
import dotenv from "dotenv";
import  userRoutes from "./src/routes/users.route.js";
dotenv.config(); 

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);

app.get("/home",(req,res)=>{
    return res.json({"hello":"world"});
});

const port=app.get("port");
const start=async ()=>{
    const connectionDb=await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MONGO connected db host ${connectionDb.connection.host}`);
    server.listen(port,()=>{
        console.log(`listening on port ${port}`);
    });
};

start();

//name-Gayatri Kulkarni
//username-gayatri24
//password-gk24