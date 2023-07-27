import mongoose from "mongoose";

const userSchema = await mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;