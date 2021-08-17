const bcrypt = require("bcrypt"); // Hashage de passwords //
const jwt = require("jsonwebtoken"); // Sécurisation de la connection grâce à des tokens uniques //

const { User } = require("../models/index"); // Importation du modèle User //

exports.login = (req, res, next) => {
  console.log("0");
  User.findOne({ where: { mail: req.body.mail } })
    .then((user) => {
      console.log("1");
      console.log(user);
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          console.log("2", valid);
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            ...user.dataValues,
            token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.createUser = async (req, res, next) => {
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
            .then(() =>
              res
                .status(201)
                .json({ message: "Utilisateur créé !", user: user.id })
            )
            .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
    } else {
      res.status(500).json({ error: "utilistauer deja créer" });
    }
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};
