import room from "../models/room.js";
import hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) =>{

    const hotelId = req.params.hotelId;
    const newRoom = new room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await hotel.findByIdAndUpdate(hotelId, {
                $push : {rooms: savedRoom._id} //Comando de mongoDB
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err)
    }

}