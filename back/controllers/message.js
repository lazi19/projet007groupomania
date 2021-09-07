
const { Message } = require("../models/index"); 
const jwt = require("jsonwebtoken"); // Sécurisation de la connection grâce à des tokens uniques //
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
    userId: req.body.userId,
  });

  message
    .save()
    .then(() => res.status(201).json({ message: "Publication réussie" }))
    .catch((error) => res.status(400).json({ error }));
};


exports.getMessageById = (req, res, next) => {
  
  Message.findOne({ id: req.params.id })
    .then((message) => res.status(200).json(message)) 
    .catch((error) => res.status(404).json({ error })); 
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