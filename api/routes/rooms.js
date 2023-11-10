import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { error } from "console";
import { createRoom, deleteRoom, updateRoom, getRoom, getAllRoom } from "../controllers/roomControllers.js";


const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);//hotelId de roomControllers.js linea 5 funcion createRoom

//UPDATE

router.put("/:id", verifyAdmin, updateRoom);

//DELETE

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//GET

router.get("/:id", getRoom);

//GETALL

router.get("/", getAllRoom);

export default router