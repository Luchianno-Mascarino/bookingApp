import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send('Hello, this is rooms endpoint')
})
router.get("/rooms", (req, res) =>{
    res.send('Hello, this is rooms2 endpoint')
})

export default router