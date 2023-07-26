import mongoose from 'mongoose';
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }

}, { timestamps: true });

tweetSchema.virtual('contentWithEmail').get(function () {
    return `${this.content} \nwritten by : ${this.userEmail}`;
});

//can apply hooks
const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;

