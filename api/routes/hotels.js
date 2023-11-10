import express from "express";
import hotel from "../models/hotel.js";
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelControllers.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

import { error } from "console";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE

router.put("/:id", verifyAdmin, updateHotel);

//DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

//GET

router.get("/find/:id", getHotel);

//GETALL

router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotel);

/*router.get("/", (req, res) =>{
    res.send('Hello, this is hotels endpoint')
})
router.get("/hotels", (req, res) =>{
    res.send('Hello, this is hotels2 endpoint')
})
*/
export default router