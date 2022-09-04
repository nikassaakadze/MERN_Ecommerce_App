const User = require('../models/userModel')

const createUsers = async (req, res) => {
  try {
    const user = await User.create({
      userName: req.body.userName,
      userPassword: req.body.userPassword,
      userEmail: req.body.userEmail,
      userPhone: req.body.userPhone
    });
    res.json({status: 'ok'});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      userPassword: req.body.userPassword,
      userEmail: req.body.userEmail,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {createUser, getUser}