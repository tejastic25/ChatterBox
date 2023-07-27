import mongoose from "mongoose";

const likeSchema = await mongoose.Schema({
    OnModel: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        refPath: 'OnModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true });
const Like = mongoose.model('Like', likeSchema);
export default Like;