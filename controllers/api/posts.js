const Post = require('../../models/posts');

module.exports = {
  createPost,
  index,
  show,
  update,
  deletePost, 
};

async function createPost(req, res) {
const post = new Post(req.body);
post.user=req.user._id;
post.save()
res.json(post)
}
async function index(req, res) {
  try {
    // Get all posts from your database
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

async function show(req, res) {
  try {
    const postId = req.params.id;
    // Find a post by its ID
    const post = await Post.findById(postId);
    if (!post) throw new Error('Post not found');
    res.json(post);
  } catch (err) {
    res.status(404).json({ error: 'Post not found' });
  }
}

async function update(req, res) {
  try {
    const postId = req.params.id;
    // Update a post by its ID based on the request body
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
    if (!updatedPost) throw new Error('Post not found');
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update post' });
  }
}

async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    // Delete a post by its ID
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) throw new Error('Post not found');
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete post' });
  }
}
