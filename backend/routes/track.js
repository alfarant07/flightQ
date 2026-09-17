import express  from "express";
import pool from '../db.js';
const router = express.Router();

//post route to insert into db
router.post('/track',async (req,res)=>{
    try{
        //destructuring json into req.body to insert into db
        const {email,origin,destination,price,travel_date} = req.body;
        //db query to insert into table
        await pool.query("INSERT INTO tracked_flights (email,origin,destination,lowest_price_seen,travel_date) VALUES ($1,$2,$3,$4,$5)",[email,origin,destination,price,travel_date])
        //success response
        res.status(200).send("Successfully Inserted into Table");
    }catch(err){
        //fail response
        console.log(err);
        res.sendStatus(500);
    }
})
export default router;