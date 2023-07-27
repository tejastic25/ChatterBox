import express from 'express';
import { PORT } from './config/server-config.js';
import connect from './config/database.js';
import bodyParser from 'body-parser';
import apiroutes from './routes/index.js';


const PrepareAndStartServer = async () => {
    const app = express();
    await connect();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/api', apiroutes);
    app.get('/home', (req, res) => {
        return res.json({
            message: "Ok"
        })
    });

    app.listen(PORT, async () => {
        console.log(`server started on PORT : ${PORT}`);
        console.log("mongo db started");
    });
}
PrepareAndStartServer();