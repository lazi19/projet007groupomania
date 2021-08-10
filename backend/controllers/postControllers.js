

// Import Product Model
import Post from "../models/postModels.js";



// Create a new 
export const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.json({
            "message": "post Created"
        });
        // res.status(201).json({ user: user._id});
    } catch (err) {
        // res.status(200).send({err})
        console.log(err)
    }
}
 

// Get all users
export const getAllPosts = async (req, res) => {
    try {
        // const postModels = await Post.find().select('-password');
        const postModels = await Post.findAll();
        res.send(postModels);
    } catch (err) {
        console.log(err);
    }
}