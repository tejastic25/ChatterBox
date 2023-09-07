import TweetService from "../service/tweet-service.js";
import { StatusCodes } from "http-status-codes";
import upload from "../config/file-upload-s3-config.js";
const tweetService = new TweetService();
const singleUploader = upload.single("image");
const create = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      console.log(err);

      if (err) {
        return res.status(500).json({ error: err });
      }
      const payload = { ...req.body };
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a new tweet",
        data: response,
        err: {},
      });
    });
  } catch (error) {
    return res.status(StatusCodes.CREATED).json({
      data: {},
      success: false,
      message: "not able to create tweet",
      err: error,
    });
  }
};

const getTweet = async (req, res) => {
  try {
    const tweet = await tweetService.getTweet(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: tweet,
      success: true,
      message: "successfully fetched tweet",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "not able to fetch tweet",
      err: error,
    });
  }
};
export { create, getTweet };
