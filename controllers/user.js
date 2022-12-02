const User = require("../models/User");
const Post = require("../models/Post");

const getAll = async (req, res) => {
  const result = await User.find();
  res.json(result);
};

const create = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();

  // Crea un post de ejemplo por cada nuevo usuario
  const newPost = new Post({
    title: "Post de ejemplo para " + newUser.name,
    body: "Contenido de ejemplo para " + newUser.name,
    author: newUser._id,
  });
  await newPost.save();

  res.json(newUser);
};

module.exports = { getAll, create };
