import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send('Hello, this is users endpoint')
})
router.get("/register", (req, res) =>{
    res.send('Hello, this is users2 endpoint')
})

export default router