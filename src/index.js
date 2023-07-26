const express = require('express');
const { PORT } = require('./config/server-config');
const connect = require('./config/database');
const TweetService = require('./service/tweet-service');
const { HashtagRepository } = require('./repository/index');
const hrepo = new HashtagRepository();
const service = new TweetService();
const PrepareAndStartServer = async () => {
    const app = express();

    app.listen(PORT, async () => {
        console.log(`server started on PORT : ${PORT}`);
        await connect();

        // const tweet = await service.create({
        //     content: "2  #new  #feeling #yo"
        // });

        // const hrepo = new HashtagRepository();
        // const hashtags = await hrepo.getWithTweets('64c10921fc6c0fceccb1b446');
        // console.log(hashtags);

        // console.log(tweet); 
        console.log("mongo db started");
    });
}
PrepareAndStartServer();