import mongoose from 'mongoose';

const post = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date() 
    }
});

const Post = mongoose.model('Post', post);

export default Post;