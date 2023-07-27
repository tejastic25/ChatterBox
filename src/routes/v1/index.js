import Express from "express";
import * as TweetController from "../../controllers/tweet-controller.js";

const router = Express.Router();


router.post('/tweet', TweetController.create);

export default router;