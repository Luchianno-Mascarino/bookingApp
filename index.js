import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import hotelsRoute from "./api/routes/hotels.js";
import roomsRoute from "./api/routes/rooms.js";
import usersRoute from "./api/routes/users.js";
const app = express()
dotenv.config()

//DATABASE MONGODB CONNECTION
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    } catch (error){
        console.error("error connection to mongoDB", error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
//Lo de arriba y lo de abajo es para que avise si esta conectada o no a la base de datos
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
});

app.get("/", (req, res) =>{
    res.send("Hello this is a proof");
});


//middlewares
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);


app.listen(8800, () => {
    connect();
    console.log("conected to port")
})