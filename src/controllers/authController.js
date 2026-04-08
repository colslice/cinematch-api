const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { FirstName, LastName, Login, Password } = req.body;

    const existingUser = await User.findOne({ Login });
    if (existingUser) {
      return res.status(400).json({ error: 'Login already exists' });
    }

    const user = await User.create({ 
      FirstName, 
      LastName, 
      Login, 
      Password,
      Services: [],
      FavGenre: [],
      NewUser: true
    });

    res.status(201).json({
      _id: user._id,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Login: user.Login,
      Services: user.Services,
      FavGenre: user.FavGenre,
      NewUser: user.NewUser
    });

  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { Login, Password } = req.body;
    const user = await User.findOne({ Login });

    if (user && user.Password === Password) {
      res.json({
        _id: user._id,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Login: user.Login,
        Services: user.Services,
        FavGenre: user.FavGenre,
        NewUser: user.NewUser
      });
    } else {
      res.status(401).json({ error: 'Invalid login or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
