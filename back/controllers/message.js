


// import {Comment} from "../models/index.js";
const {Comment} = require ("../models/index.js")
// import {User} from "../models/index.js";
const {User} = require ("../models/index.js")
const { Message } = require("../models/index"); // Importation du modèle User //
const jwt = require("jsonwebtoken"); // Sécurisation de la connection grâce à des tokens uniques //

const fs = require("fs");

// const decodeId = (authorization) => {
//   const token = authorization.split(" ")[1];
//   const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
//   return {
//       id: decodedToken.userId,
//   };
// };

// Routes CRUD : Create, Read, Update, Delete.

exports.createMessage = (req, res, next) => {

  console.log(" req.body :" + req.body);
  console.log(" req.body.message :" + req.body.message);
  // const messageObject = JSON.parse(req.body);
  // console.log("messageObject :" + messageObject.message)
  // const user = decodeId(req.headers.authorization);

  // console.log("ligne 15 req.body" + req.body.messageUrl);
  // const messageObject = JSON.parse(req.body.token);
  // delete messageObject.token;

  let imagePost = "";

  if (req.file) {
    imagePost = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }
  const message = new Message({
    // UserId: req.headers.authorization[1],
    // UserId: req.body.UserId,
    message: req.body.message,
    messageUrl: imagePost,
    userId:  req.body.userId
  });
  console.log(message);
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

  
  
    // .then((message) => {
    //   const filename = message.imageUrl.split("/images/")[1];
    //   fs.unlink(`images/${filename}`, () => {
    //     Message.deleteOne({ id: req.params.id })
    //       .then(() => res.status(200).json({ message: "Message supprimé !" }))
    //       .catch((error) => res.status(400).json({ error }));
    //   });
    // })
    // .catch((error) => res.status(500).json({ error }));
};

exports.getAllMessages = (req, res, next) => {
  Message.findAll()

    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};
