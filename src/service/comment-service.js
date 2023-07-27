import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {

    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }
    async create(modelType, modelId, userId, content) {
        try {
            if (modelType == 'Tweet') {

                var commentable = await this.tweetRepository.getWithComments(modelId);

            } else if (modelType == 'Comment') {

                var commentable = await this.commentRepository.getWithComments(modelId);
            }
            else {
                throw new Error("unknown model type");
            }
            var comment =await  this.commentRepository.create({
                content: content,
                userId: userId,
                onModel: modelType,
                commentable: modelId,
                comments: []
            });
            commentable.comments.push(comment);
            await commentable.save();
            return comment;

        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
            throw error;
        }

    }

}
export default CommentService;