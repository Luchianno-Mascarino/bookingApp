import express from "express";
import hotel from "../models/hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelControllers.js";

import { error } from "console";


const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE

router.put("/:id", updateHotel);

//DELETE

router.delete("/:id", deleteHotel);

//GET

router.get("/:id", getHotel);

//GETALL

router.get("/", getAllHotel);

/*router.get("/", (req, res) =>{
    res.send('Hello, this is hotels endpoint')
})
router.get("/hotels", (req, res) =>{
    res.send('Hello, this is hotels2 endpoint')
})
*/
export default router