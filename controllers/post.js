const Post = require("../models/Post");

const getAll = async (req, res) => {
  const result = await Post.find(req.query).populate("author");
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Post.findById(id).populate("author");
  res.json(result);
};

const create = async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
};

module.exports = { getAll, create, getById };
