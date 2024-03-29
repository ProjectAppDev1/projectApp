const bcrypt = require("bcryptjs");
const User = require("../models/user");

const createUser = async ({ username, email, password, isAdmin }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, isAdmin, password: hashedPassword });
  const newUser = await user.save();
  return newUser;
};

const getUser = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

const getAllUsers = async (options = {}) => {
  const users = await User.find(options);
  return users;
};

const updateAdmin = async (id, newAdmin) => {
  const user = await User.findByIdAndUpdate(id, newAdmin, {
    new: true,
    runValidators: true,
  });
  return user;
};

const updateUser = async (id, newUser) => {
  const user = await User.findByIdAndUpdate(id, newUser, {
    new: true,
    runValidators: true,
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

const getAllAdmins = async () => {
  const admins = await User.find({ isAdmin: true });
  return admins;
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
  updateAdmin,
  getAllAdmins,
};
