import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {

    constructor() {
        this.respository = new TweetRepository();
        this.hashrepo = new HashtagRepository();
    }

    async create(data) {
        try {
            const content = data.content;
            const hashtagsTitle = await content.match(/#[a-zA-Z0-9_]+/g)
                .map((tag) => tag.substring(1))
                .map((tag) => tag.toLowerCase());

            const tweet = await this.respository.create(data);// created tweet
            // filtering already present and new hashtags
            const alreadyPresentTags = await this.hashrepo.getByName(hashtagsTitle);
            let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
            let newTags = hashtagsTitle.filter((tag) => !titleOfPresenttags.includes(tag));
            newTags = newTags.map(tag => {
                return { title: tag, tweets: [tweet.id] }
            });
            await this.hashrepo.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;

        } catch (error) {

            console.log("something went wrong in the service layer");
            console.log(error);
            throw error;

        }
    }
    async getTweet(tweetId) {
        try {
            const tweet = await this.respository.getWithComments(tweetId);
            return tweet;
        } catch (error) {
            console.log("something went wrong in the service layer");
            console.log(error);
            throw error;
        }
    }
}
export default TweetService;