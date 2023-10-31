import express from "express";
import hotel from "../models/hotel.js";
import { error } from "console";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
    
    const newHotel = new hotel(req.body); 
    
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch(err){
        res.status(500).json(err);
    }
});

//UPDATE

router.put("/:id", async (req, res) => { 
    
    try{
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true });//este true es para que aparezca cuando se cambia la base
        res.status(200).json(updatedHotel);
    } catch(err){
        res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", async (req, res) => { 
    
    try{
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch(err){
        res.status(500).json(err);
    }
});

//GET

router.get("/:id", async (req, res) => { 
    
    try{
        const hotelGet = await hotel.findById(
            req.params.id
            );
        res.status(200).json(hotelGet);
    } catch(err){
        res.status(500).json(err);
    }
});

//GETALL

router.get("/", async (req, res, next) => { 
   
    try{
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    } catch(err){
        next(err);
    }
});

/*router.get("/", (req, res) =>{
    res.send('Hello, this is hotels endpoint')
})
router.get("/hotels", (req, res) =>{
    res.send('Hello, this is hotels2 endpoint')
})
*/
export default router