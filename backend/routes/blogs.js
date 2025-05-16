const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

router.post('/save-draft', async (req, res) => {
  const { id, title, content, tags } = req.body;
  const update = { title, content, tags, status: 'draft', updatedAt: new Date() };
  try {
    const blog = id ? await Blog.findByIdAndUpdate(id, update, { new: true }) : await Blog.create(update);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/publish', async (req, res) => {
  const { id, title, content, tags } = req.body;
  const update = { title, content, tags, status: 'published', updatedAt: new Date() };
  try {
    const blog = id ? await Blog.findByIdAndUpdate(id, update, { new: true }) : await Blog.create(update);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updatedAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
