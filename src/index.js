import express from 'express';
import { PORT } from './config/server-config.js';
import { connect } from './config/database.js';

const PrepareAndStartServer = async () => {
    const app = express();
    app.listen(PORT, async () => {
        console.log(`server started on PORT : ${PORT}`);

        await connect();

        console.log("mongo db started");
    });
}
PrepareAndStartServer();