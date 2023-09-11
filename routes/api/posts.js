const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');


// All paths start with '/api/posts'

// POST /api/posts (create a new post)
router.post('/create', postsCtrl.createPost);

// GET /api/posts (get all posts)
router.get('/', postsCtrl.index);

// GET /api/posts/:id (get a single post by ID)
router.get('/:id', postsCtrl.show);

// PUT /api/posts/:id (update a post by ID)
router.put('/:id', postsCtrl.update);

// DELETE /api/posts/:id (delete a post by ID)
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;
