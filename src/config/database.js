import mongoose from 'mongoose';
const connect = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/twitter_Dev");
}
export default connect;
