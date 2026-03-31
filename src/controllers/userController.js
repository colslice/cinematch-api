const User = require('../models/User');

// Services CRUD
exports.addService = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      { $addToSet: { Services: req.body.service } }, // Prevents duplicates
      { new: true }
    );
    res.json(user.Services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeService = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      { $pull: { Services: req.body.service } },
      { new: true }
    );
    res.json(user.Services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Genres CRUD
exports.addGenre = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      { $addToSet: { FavGenre: req.body.genre } },
      { new: true }
    );
    res.json(user.FavGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeGenre = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      { $pull: { FavGenre: req.body.genre } },
      { new: true }
    );
    res.json(user.FavGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};