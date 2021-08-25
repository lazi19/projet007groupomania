groupomania Réseau social entreprise
P7 Openclassrooms


Il vous faudra avoir installé sur votre machine:
    * Node.js (et donc npm),
    * MySQL,
    * Git.


Créer un dossier vide et cloner ce repository à l'intérieur:


Installez les dépendances comme pour n'importe quel projet avec npm install (assurez vous d’avoir mySql)

Dans le dossier back => config => database.json mettez-y votre username a la place de root et votre mot de passe dans les '' vide pour la base de donnée development

créer localement la base de donnée « projet007 »

Dans l'invite de commande déplacez vous dans le dossier back : cd back , tapez sequelize db:create , puis sequelize db:migrate , (assurez vous que sequelize-cli est bien installé)

Dans le dossier back => models => index.js suivez les instructions pour créer un compte modérateur , enregistrez les modifications , puis lancer nodemon.

Pour le front déplacez vous dans le dossier front à l’aide de la commande cd frontend puis npm start

Vous pouvez maintenant vous connecter avec votre compte modérateur ou créer un autre compte normal