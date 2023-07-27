import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {

    constructor() {
        super(Like);
    }

    async findByUSerandLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            console.log(error);
        }
    }
}
export default LikeRepository;


// wehenever someone likes a tweet there is an like object created under like model
// then also in that tweet -> id of that like object will be added 