import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
const router = express.Router();
const saltRounds = 10;


//post route to insert into db
router.post("/auth/signup", async (req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password || password.length < 8){
            res.status(400).json({"error": "Invalid input"});
            return;
        }
        //db query to insert into table
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const result = await pool.query(
            `INSERT INTO users (email, password_hash)
            VALUES ($1, $2)
            ON CONFLICT (email) DO NOTHING`,
            [email, hashedPassword]
        );
        if(result.rowCount === 0){
            res.status(409).json({"error": "Email already exists"});
            return;
        }
        //success response
        res.status(201).json({"message": "Successfully Inserted into Table"});
    }catch (err) {
        //fail response
        console.log(err);
        res.status(500).json({"error": "Internal Server Error"});
    }
});
export default router;