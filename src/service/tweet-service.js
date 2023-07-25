const Tweet = require('../models/tweet');

class TweetService {

    constructor() {
        this.respository = new Tweet();
    }
    async create(data) {
        try {
            const content = data.content;
            const hashtags = content.match(/#[a-zA-Z0-9_]+/g);
            const hashtagsTitle = hashtags.map((tag) => tag.substring(1));
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {

            console.log("something went wrong in the service layer")
            throw error;

        }
    }
}
module.exports = TweetService;