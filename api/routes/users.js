import express from "express";
import { deleteUsers, getAllUsers, getUsers, updateUsers } from "../controllers/usersControllers.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=> {
//     res.send("Hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next)=> {
//     res.send("Hello user, you are logged in and can delete");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=> {
//     res.send("Hello admin, you are logged in and can delete all accounts");
// });

//UPDATE

router.put("/:id", verifyUser, updateUsers);

//DELETE

router.delete("/:id", verifyUser, deleteUsers);

//GET

router.get("/:id",verifyUser, getUsers);

//GETALL

router.get("/", verifyAdmin, getAllUsers);

export default router