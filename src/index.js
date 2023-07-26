import express from 'express';
import { PORT } from './config/server-config.js';
import connect from './config/database.js';
import TweetService from './service/tweet-service.js';
import HashtagRepository from './repository/hashtag-repository.js';
const hr = new HashtagRepository();
const ts = new TweetService();
const PrepareAndStartServer = async () => {
    const app = express();
    await connect();
    app.listen(PORT, async () => {
        console.log(`server started on PORT : ${PORT}`);

        const tweet = await ts.create({
            content: "hello this is the first tweet feeling #excited #tejas"
        });
        console.log(tweet);


        // await hr.create({
        //     title: "tejas"
        // });

        console.log("mongo db started");
    });
}
PrepareAndStartServer();