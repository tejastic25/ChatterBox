import Tweet from '../models/tweet.js';
class TweetRepository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log("something went wrong in the repository layer");
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log("something went wrong in the repository layer");
        }
    }

    async delete(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id)
            return tweet;
        } catch (error) {
            console.log("something went wrong in the repository layer");
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithHashtags(id) {
        try {
            const tweet = await Tweet.findById(id).populate('hashtags');
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}
export default TweetRepository;