// Import Product Model
import User from "../models/userModels.js";
 
// Get all users
export const getAllUsers = async (req, res) => {
    try {
        // const userModels = await User.find().select('-password');
        const userModels = await User.findAll();
        res.send(userModels);
        // res.status(200).json(userModels);
    } catch (err) {
        console.log(err);
    }
}
 
// Get user by id
export const getUserById = async (req, res) => {
    try {
        const userModels = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(userModels[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new 
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({
            "message": "user Created"
        });
        // res.status(201).json({ user: user._id});
    } catch (err) {
        // res.status(200).send({err})
        console.log(err)
    }
}
 
// Update user by id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send(req.body)
        // json({
        //     "message": "user Updated" 
        // });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete user by id
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "user Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
