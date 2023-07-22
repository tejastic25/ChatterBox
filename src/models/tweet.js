const mongoose = require('mongoose');


const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    comments: [
        {
            content: {
                // type: mongoose.Schema.Types.ObjectId,
                type: String,
                ref: 'Comment'
            }
        }
    ]

}, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;

