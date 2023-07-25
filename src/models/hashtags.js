const mongoose = require('mongoose');


const hashtagsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
}, { timestamps: true });

const Hashtags = mongoose.model('Hashtag', hashtagsSchema);
module.exports = Hashtags;