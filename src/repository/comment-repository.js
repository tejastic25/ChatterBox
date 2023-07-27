import Comment from "../models/comment.js";
import CrudRepository from "./crud-repository.js";

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }

    async getWithComments(id) {
        try {
            const comment = await Comment.findById(id).populate({
                path: 'comments'
            });
            return comment;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            console.log(error);
        }
    }
}

export default CommentRepository;