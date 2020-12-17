import Post from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);

        const savedPost = await post.save();

        res.status(201).json(savedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPosts = async (_, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}