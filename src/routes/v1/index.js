import Express from "express";
import * as TweetController from "../../controllers/tweet-controller.js";
import * as LikeController from "../../controllers/like-controller.js";
import * as CommentController from "../../controllers/comment-controller.js";
import * as AuthController from "../../controllers/auth-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";
const router = Express.Router();

//create tweets
router.post("/tweets", authenticate, TweetController.create);
router.get("/tweets/:id", TweetController.getTweet);

router.post("/tweets/toggle", LikeController.toggleLike); // toggle like on a tweet

//comments
router.post("/comments", authenticate, CommentController.create);

//Authentication
router.post("/signUp", AuthController.signUp);
router.post("/signIn", AuthController.signIn);

export default router;
