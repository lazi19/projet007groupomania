
import PostComment from "../models/postCommentModels.js";
import User from "../models/userModels.js";





// Routes CRUD : Create, Read, Update, Delete.


exports.createComment = (req, res, next) => {

        console.log(req.body);
        
        const comment = new PostComment(
            {
                id_comment:     req.body.id_comment,
                comment:    req.body.comment,
                // createdAt:
                // updatedAt:
                // userId:
                // messageId:
            }
        )
        console.log(comment)
        comment.save()
            .then(() => res.status(201).json({ message: "Commentaire réussie" }))
            .catch(error => res.status(400).json({ error }));
  
}

