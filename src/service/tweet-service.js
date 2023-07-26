import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {

    constructor() {
        this.respository = new TweetRepository();
        this.hashrepo = new HashtagRepository();
    }
    async create(data) {
        try {
            const content = data.content;
            const hashtags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1));
            const hashtagsTitle = hashtags;
            const tweet = await this.respository.create(data);// created tweet
            // filtering already present and new hashtags
            const alreadyPresentTags = await this.hashrepo.getByName(hashtagsTitle);
            let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
            let newTags = hashtags.filter((tag) => !titleOfPresenttags.includes(tag));
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

            console.log("something went wrong in the service layer")
            throw error;

        }
    }
}
export default TweetService;