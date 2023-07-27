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
const getTweet = async (req, res) => {
    try {
        const tweet = await tweetService.getTweet(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: tweet,
            success: true,
            message: "successfully fetched tweet",
            err: {}
        });

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "not able to fetch tweet",
            err: error
        });
    }
}
export { create, getTweet }