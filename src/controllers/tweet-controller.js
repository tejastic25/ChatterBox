import TweetService from "../service/tweet-service.js";
import { StatusCodes } from "http-status-codes";
const tweetService = new TweetService();

const create = async (req, res) => {
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: tweet,
            success: true,
            message: "successfully created tweet",
            err: {}
        });

    } catch (error) {
        return res.status(StatusCodes.CREATED).json({
            data: {},
            success: false,
            message: "not able to create tweet",
            err: error
        });
    }
}
export { create }