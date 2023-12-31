import hotel from "../models/hotel.js"

//CREATE
export const createHotel = async (req, res, next) => {
    const newHotel = new hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch(err){
        next(err);
    }

}
 //UPDATE
export const updateHotel = async (req, res, next) => {
    try{
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true });//este true es para que aparezca cuando se cambia la base
        res.status(200).json(updatedHotel);
    } catch(err){
        next(err);
    }

}


//DELETE
export const deleteHotel = async (req, res, next) => {
    try{
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    } catch(err){
        next(err);
    }

}

//GET
export const getHotel = async (req, res, next) => {
    try{
        const hotelGet = await hotel.findById(
            req.params.id
            );
        res.status(200).json(hotelGet);
    } catch(err){
        next(err);
    }

}

//GETALL
export const getAllHotel = async (req, res, next) => {
    try{
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    } catch(err){
        next(err);
    }

}

//GETALL count by city
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const promises = cities.map(async (city) => {
            return await hotel.countDocuments({ city: city });
        });

        const results = await Promise.all(promises);

        res.status(200).json(results);
    } catch (err) {
        next(err);
    }
};


//GETALL count by type
export const countByType = async (req, res, next) => {
    try{
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    } catch(err){
        next(err);
    }

}