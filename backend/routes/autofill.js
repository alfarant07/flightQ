import  express  from "express";
import {Duffel}  from "@duffel/api";

const router = express.Router();
const duffel = new Duffel({
    token: process.env.DUFFEL_API_KEY,
  });

  router.get("/places/suggestions",async(req,res)=>{
    try {
        const {query} = req.query;
        if(!query){
            return res.json([]);
        }
        const response = await duffel.suggestions.list({query});
        const places = response.data.map((place) => ({
            iata_code: place.iata_code,
            name: place.name,
            city_name: place.city_name,
            type: place.type,
          }));
          res.json(places);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fill destination" });
    }
  })
  
  export default router;