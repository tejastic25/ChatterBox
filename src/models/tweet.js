import mongoose from 'mongoose';
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]

}, { timestamps: true });

tweetSchema.virtual('contentWithEmail').get(function () {
    return `${this.content} \nwritten by : ${this.userEmail}`;
});

//can apply hooks
const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;

