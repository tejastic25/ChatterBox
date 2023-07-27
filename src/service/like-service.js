import { LikeRepository, TweetRepository, CommentRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.LikeRepository = new LikeRepository();
        this.TweetRepository = new TweetRepository();
        this.CommentRepository = new CommentRepository();
    }

    async toggleLike(modelType, modelId, userId) {

        try {
            if (modelType == 'Tweet') {
                var likeable = await this.TweetRepository.find(modelId);

            } else if (modelType == 'Comment') {
                // var likeable = this.CommentRepository.find(modelId);

            }
            else {
                throw new Error("unknown model type");
            }

            const exists = await this.LikeRepository.findByUSerandLikeable({
                user: userId,
                OnModel: modelType,
                likeable: modelId
            });
            if (exists) {
                await likeable.likes.pull(exists.id);
                await likeable.save();
                await this.LikeRepository.delete(exists.id);
                var isAdded = false;
            }
            else {
                const newLike = await this.LikeRepository.create({
                    user: userId,
                    OnModel: modelType,
                    likeable: modelId
                });
                await likeable.likes.push(newLike);
                await likeable.save();
                var isAdded = true;
            }
            return isAdded;

        } catch (error) {
            console.log("something went wrong in the Service layer");
            throw error;
        }
    }

}

export default LikeService;

///task :
// toggle like on a model (tweet or comment)

// for that first find if a like instance exists if then remove like from that model
// then reomvie the like object

// if it doesnt create the like object
// then link that like object to the corresponding models attribute