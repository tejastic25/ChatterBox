import LikeService from "../service/like-service.js";
const likeService = new LikeService;


export const toggleLike = async (req, res) => {
    try {
        const like = await likeService.toggleLike(req.query.modelType, req.query.modelId, req.body.userId);
        return res.status(StatusCodes.CREATED).json({
            data: like,
            success: true,
            message: "successfully toggled like",
            err: {}
        });

    } catch (error) {
        return res.status(StatusCodes.CREATED).json({
            data: {},
            success: false,
            message: "not able to toggle like",
            err: error
        });
    }
}
