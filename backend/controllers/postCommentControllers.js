import PostMessage from "../models/postMessageModels.js";
import PostComment from "../models/postCommentModels.js";
import User from "../models/userModels.js";
const fs = require("fs");

// Routes CRUD : Create, Read, Update, Delete.

export const createMessage = (req, res, next) => {
  console.log(req.body);
  console.log("ligne 15 req.body" + req.body.messageUrl);
  const messageObject = JSON.parse(req.body.message);
  delete messageObject.id;

  let imagePost = "";

  if (req.file) {
    imagePost = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }
  const message = new PostMessage({
    UserId: req.body.UserId,
    message: req.body.message,
    messageUrl: imagePost,
  });
  console.log(message);
  message
    .save()
    .then(() => res.status(201).json({ message: "Publication réussie" }))
    .catch((error) => res.status(400).json({ error }));
};
