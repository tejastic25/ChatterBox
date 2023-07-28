import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { SALT } from "../config/server-config.js";
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

userSchema.pre('save', function (next) {
    const user = this;
    user.password = bcrypt.hashSync(user.password, SALT);
    console.log(user.password);
    next();
});


const User = mongoose.model('User', userSchema);
export default User;