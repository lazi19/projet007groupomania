// Import Product Model
import User from "../models/userModels.js";
import bcrypt from 'bcrypt'; // Hashage de passwords //
import jwt from 'jsonwebtoken'; 
 
// Get all users
export const getAllUsers = async (req, res) => {
    try {
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
export const createUser = async (req, res, next) => {
        try {
        const user = await User.findOne({
            
          where: { mail: req.body.mail },
        });
        if (user === null) {
          bcrypt
            .hash(req.body.password, 10) // Permet le hashage du mot de passe
            .then((hash) => {
              const user = new User({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                mail: req.body.mail,
                password: hash,
              });
              user
                .save()
                .then(() => res.status(201).json({ message: "Utilisateur créé !", user: user.id }))
                .catch((error) => res.status(400).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
        
        }
        else {
            res.status(500).json({ error: 'utilistauer deja créer' })
        }
  } catch (error) {
        return res.status(400).send({ error: error });
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
        res.send({ "message": "user Updated", "req.body" : req.body });
       
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


// Pour que l'utilisateur se connecte
export const login = (req, res, next) => {
    console.log("0")
    User.findOne({ where: { mail: req.body.mail } })
      .then((user) => {
        console.log("1")
        console.log(user)
        if (!user) {
          return res.status(401).json({ error: "Utilisateur non trouvé !" });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            console.log("2", valid)
            if (!valid) {
              return res.status(401).json({ error: "Mot de passe incorrect !" });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
                expiresIn: "24h",
              }),
            });
          })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  };
