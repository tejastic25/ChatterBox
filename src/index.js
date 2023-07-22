const express = require('express');
const { PORT } = require('./config/server-config');
const connect = require('./config/database');
const TweetRepository = require('./reps/tweet-repository')
const Comment = require('./models/comment');
const Tweet = require('./models/tweet');
const repo = new TweetRepository();
const PrepareAndStartServer = async () => {
    const app = express();

    app.listen(PORT, async () => {
        console.log(`server started on PORT : ${PORT}`);
        await connect();

        // const tweet = await repo.getWithComments('64bb69c9397448ffe64b2afa')
        // const comment = await Comment.create({ content: "this the 2 comment" });
        // // await tweet.comments.push(comment); 
        // // await tweet.save();
        // console.log(tweet); 
        console.log("mongo db started");
    })
}
PrepareAndStartServer();