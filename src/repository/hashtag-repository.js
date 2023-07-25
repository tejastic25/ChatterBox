const Hashtags = require('../models/hashtags');

class HashtagRepository {

    async create(data) {
        try {
            const tag = await Hashtags.create(data);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const tag = await Hashtags.insertMany(data);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async getById(id) {
        try {
            const tag = await Hashtags.find(id);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async delete(id) {
        try {
            const tag = await Hashtags.findByIdAndRemove(id);
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
    async getByName(titleLiist) {
        try {
            const tag = await Hashtags.find({
                title: titleLiist
            });
            return tag;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }

}
module.exports = HashtagRepository;