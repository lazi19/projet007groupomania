// Import Product Model
import User from "../models/userModels.js";
 
// Get all products
export const getAllUsers = async (req, res) => {
    try {
        const userModels = await User.findAll();
        res.send(userModels);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product by id
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
 
// Create a new product
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "user Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product by id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "user Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product by id
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