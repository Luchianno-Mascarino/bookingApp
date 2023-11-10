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

export const updateRoom = async (req, res, next) => {
    try{
        const updatedRoom = await room.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true });//este true es para que aparezca cuando se cambia la base
        res.status(200).json(updatedRoom);
    } catch(err){
        next(err);
    }

}


//DELETE
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try{
        await room.findByIdAndDelete(req.params.id);
        try{
            await hotel.findByIdAndUpdate(hotelId, {
                $pull : { rooms: req.params.id },
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Room has been deleted");
    } catch(err){
        next(err);
    }

}

//GET
export const getRoom = async (req, res, next) => {
    try{
        const roomGet = await room.findById(
            req.params.id
            );
        res.status(200).json(roomGet);
    } catch(err){
        next(err);
    }

}

//GETALL
export const getAllRoom = async (req, res, next) => {
    try{
        const rooms = await room.find();
        res.status(200).json(rooms);
    } catch(err){
        next(err);
    }

}