groupomania Réseau social entreprise
P7 Openclassrooms

Git clôner le projet

Installez les dépendances comme pour n'importe quel projet(assurez vous d’avoir mySql)

Dans le dossier backend => config => database.json mettez-y votre username a la place de root et votre mot de passe dans les '' vide pour la base de donnée development

créer localement la base de donnée « db_groupomania »

Dans l'invite de commande déplacez vous dans le dossier backend : cd backend , tapez sequelize db:create , puis sequelize db:migrate , (assurez vous que sequelize-cli est bien installé)

Dans le dossier backend => models => index.js suivez les instructions pour créer un compte modérateur , enregistrez les modifications , puis lancer nodemon.

Pour le frontend déplacez vous dans le dossier frontend à l’aide de la commande cd frontend puis npm start

Vous pouvez maintenant vous connecter avec votre compte modérateur ou créer un autre compte normal