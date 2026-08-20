//File imports 
import express  from "express";
import {Duffel}  from "@duffel/api";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

//Duffel obj created w api key
const duffel = new Duffel({
  token: process.env.DUFFEL_API_KEY,
});
//post route for api
router.post('/search',async (req,res)=>{
    try {

        //prepping variables for post request destructure
        const { origin,destination,departure_date,cabin_class} = req.body;

        //making our call to get offer based on destructured req.body
        const offers = await duffel.offerRequests.create({
        slices : [
          {
            origin,
            destination,
            departure_date
          },
        ],
        passengers: [{ type: "adult" }],
        cabin_class,
      })

      //sending retrieved offers to front end
    res.json(offers.data);

    //catches Duffel API errors and sends 500 response
} catch(err){
    console.error(err);
    res.status(500).json({ error: "Failed to fetch flight offers" });
}
})

export default router;