// import {User} from "../models/index.js";
const { Message } = require("../models/index"); // Importation du modèle User //
const jwt = require("jsonwebtoken"); // Sécurisation de la connection grâce à des tokens uniques //
// var multer = require('multer');
const fs = require("fs");
const User = require("../models/User");

// Routes CRUD : Create, Read, Update, Delete.

exports.createMessage = (req, res, next) => {

  let imagePost = "";

    if (req.file) {
        imagePost = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    }
  const message = new Message({
    message: req.body.message,
    messageUrl: imagePost,
    //  `${req.protocol}://${req.get("host")}/images/${req.file.filename }`,
    userId: req.body.userId,
  });

  message
    .save()
    .then(() => res.status(201).json({ message: "Publication réussie" }))
    .catch((error) => res.status(400).json({ error }));
};


exports.getMessageById = (req, res, next) => {
  // On utilise la méthode findOne et on lui passe l'objet de comparaison, on veut que l'id de la sauce soit le même que le paramètre de requête
  Message.findOne({ id: req.params.id })
    .then((message) => res.status(200).json(message)) // Si ok on retourne une réponse et l'objet
    .catch((error) => res.status(404).json({ error })); // Si erreur on génère une erreur 404 pour dire qu'on ne trouve pas l'objet
};

exports.updateMessage = (req, res, next) => {
  let messageObject = {};
  req.file // Si la modification contient une image
    ? (Message.findOne({ id: req.params.id }).then((message) => {
        const filename = message.imageUrl.split("/images/")[1];
        fs.unlinkSync(`images/${filename}`);
      }),
      (messageObject = {
        ...JSON.parse(req.body.message),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }))
    : (messageObject = { ...req.body });

  Message.updateOne(
    { id: req.params.id },
    { ...messageObject, id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Message modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteMessage = (req, res, next) => {

  Message.destroy({ where: { id: req.params.id } })
  .then(() =>
  res
    .status(200)
    .json({ message: "Message supprimé" })
)
.catch((error) => res.status(500).json({ error }));
};



exports.getAllMessages = (req, res, next) => {
  Message.findAll()

    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};


// exports.getAllMessages = (req, res, next) => {
//   Message.findAll({
//     include: { model: User,  attributes: ["firstname"]}, 
//   })

//     .then(messages => {
//       const list = messages.map(message => {
//         return Object.assign({},
//           {
//             id:         message.id,
//             createdAt:  message.createdAt,
//             message:    message.message,
//             messageUrl: message.messageUrl,
//             userId:     message.userId,
//             userName:   message.User.firstname           
//           }
//         )
//     })
//      res.status(200).json({list})
//   })
//     .catch((error) => res.status(400).json({ error }));
// };




// exports.getAllMessages = (req, res, next) => {
//   Message.findAll()
//   .then(async (messages) => {
//     const messageUser = message.map(async (message) => {
//       const user = await User.findOne({
//         where: {id : message.userId,
//         },
//       });
//       return{...message, user};
//     });
//     console.log(messageUrl);
//     return messageUrl;
//   })

//     .then((messages) => res.status(200).json(messages))
//     .catch((error) => res.status(400).json({ error }));
// };
