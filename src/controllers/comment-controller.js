import CommentService from "../service/comment-service.js";
const commentService = new CommentService();
import { StatusCodes } from "http-status-codes";
export const create = async (req, res) => {
  try {
    const comment = await commentService.create(
      req.query.modelType,
      req.query.modelId,
      req.user.id,
      req.body.content
    );
    return res.status(StatusCodes.CREATED).json({
      data: comment,
      success: true,
      message: "commented successfully",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: true,
      message: "not able to comment",
      err: error,
    });
  }
};
