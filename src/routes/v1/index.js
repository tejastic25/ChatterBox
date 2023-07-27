import Express from "express";
import * as TweetController from "../../controllers/tweet-controller.js";
import * as LikeController from "../../controllers/like-controller.js"
const router = Express.Router();

//create tweets
router.post('/tweets', TweetController.create);

// toggle like on a tweet
router.post('/tweets/toggle', LikeController.toggleLike);


export default router;