import mongoose, { mongo } from "mongoose";
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return `${this.content} \nwritten by : ${this.userEmail}`;
});

//can apply hooks
const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
