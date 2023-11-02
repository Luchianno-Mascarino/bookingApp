import Users from "../models/user.js"


 //UPDATE
export const updateUsers = async (req, res, next) => {
    try{
        const updatedUsers = await Users.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true });//este true es para que aparezca cuando se cambia la base
        res.status(200).json(updatedUsers);
    } catch(err){
        next(err);
    }

}


//DELETE
export const deleteUsers = async (req, res, next) => {
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("Users has been deleted");
    } catch(err){
        next(err);
    }

}

//GET
export const getUsers = async (req, res, next) => {
    try{
        const usersGet = await Users.findById(
            req.params.id
            );
        res.status(200).json(usersGet);
    } catch(err){
        next(err);
    }

}

//GETALL
export const getAllUsers = async (req, res, next) => {
    try{
        const user = await Users.find();
        res.status(200).json(user);
    } catch(err){
        next(err);
    }

}