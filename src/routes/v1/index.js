import Express from "express";
import * as TweetController from "../../controllers/tweet-controller.js";
import * as LikeController from "../../controllers/like-controller.js";
import * as CommentController from "../../controllers/comment-controller.js";
const router = Express.Router();

//create tweets
router.post('/tweets', TweetController.create);
router.get('/tweets/:id', TweetController.getTweet);
router.post('/tweets/toggle', LikeController.toggleLike);// toggle like on a tweet


//comments
router.post('/comments', CommentController.create);



export default router;