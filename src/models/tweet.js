import mongoose, { mongo } from 'mongoose';
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]

}, { timestamps: true });

tweetSchema.virtual('contentWithEmail').get(function () {
    return `${this.content} \nwritten by : ${this.userEmail}`;
});

//can apply hooks
const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;

