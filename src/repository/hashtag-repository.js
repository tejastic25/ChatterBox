const Hashtag = require('../models/hashtag');

class HashtagRepository {

    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const tag = await Hashtag.insertMany(data);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async getById(id) {
        try {
            const tag = await Hashtag.find(id);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async delete(id) {
        try {
            const tag = await Hashtag.findByIdAndRemove(id);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async getByName(titleLiist) {
        try {
            const tag = await Hashtag.find({
                title: titleLiist
            });
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async getWithTweets(id) {
        try {
            const tweets = await Hashtag.findById(id).populate('tweets');
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
module.exports = HashtagRepository;