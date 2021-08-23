


// // import {Comment} from "../models/index.js";
// const {Comment} = require ("../models/index.js")
// // import {User} from "../models/index.js";
// const {User} = require ("../models/index.js")
// const { Message } = require("../models/index"); // Importation du modèle User //
// const jwt = require("jsonwebtoken"); // Sécurisation de la connection grâce à des tokens uniques //

// // Routes CRUD : Create, Read, Update, Delete.

// exports.createCommentaire = (req, res, next) => {
//     console.log("j'ai envoyer un commentaire")
//   console.log(" req.body :" + req.body);
//   console.log(" req.body.commentaire :" + req.body.commentaire);
//   console.log(" req.body.userMessage :" + req.body.userMessage);
//   // const messageObject = JSON.parse(req.body);
//   // console.log("messageObject :" + messageObject.message)
//   // const user = decodeId(req.headers.authorization);

//   // console.log("ligne 15 req.body" + req.body.messageUrl);
//   // const messageObject = JSON.parse(req.body.token);
//   // delete messageObject.token;

 
//   const comment = new Comment({
     
//     // UserId: req.headers.authorization[1],
//     // UserId: req.body.UserId,
//     comment: req.body.commentaire,
//     userMessage:  req.body.userComment
//   });
//   console.log(comment);
//   comment
//     .save()
//     .then(() => res.status(201).json({ Message: "Commentaire réussie" }))
//     .catch((error) => res.status(400).json({ error }));
// };

// exports.getCommentaireById = (req, res, next) => {
//   // On utilise la méthode findOne et on lui passe l'objet de comparaison, on veut que l'id de la sauce soit le même que le paramètre de requête
//   Comment.findOne({ id: req.params.id })
//     .then((comment) => res.status(200).json(comment)) // Si ok on retourne une réponse et l'objet
//     .catch((error) => res.status(404).json({ error })); // Si erreur on génère une erreur 404 pour dire qu'on ne trouve pas l'objet
// };

// exports.updateCommentaire = (req, res, next) => {
//     let commentObject = { ...req.body };

//   Comment.updateOne(
//     { id: req.params.id },
//     { ...commentObject, id: req.params.id }
//   )
//     .then(() => res.status(200).json({ Commentaire: " Commentaire modifié !" }))
//     .catch((error) => res.status(400).json({ error }));
// };

// exports.deleteComment = (req, res, next) => {

//   Comment.destroy({ where: { id: req.params.id } })
//     .then(() =>
//         res
//         .status(200)
//         .json({ message: "Commentaire supprimé" })
//     )
//     .catch((error) => res.status(500).json({ error }));

  
// };

// exports.getAllCommentaire = (req, res, next) => {
//   Comment.findAll()

//     .then((commentaires) => res.status(200).json(commentaires))
//     .catch((error) => res.status(400).json({ error }));
// };
