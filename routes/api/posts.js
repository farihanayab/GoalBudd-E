const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const login = require('../../config/ensureLoggedIn');


// All paths start with '/api/posts'

// POST /api/posts (create a new post)
router.post('/create',login, postsCtrl.createPost);

// GET /api/posts (get all posts)
router.get('/', postsCtrl.index);

// GET /api/posts/:id (get a single post by ID)
router.get('/:id', login, postsCtrl.show);

// PUT /api/posts/:id (update a post by ID)
router.put('/:id',login, postsCtrl.update);

// DELETE /api/posts/:id (delete a post by ID)
router.delete('/:id',login, postsCtrl.deletePost);

module.exports = router;
