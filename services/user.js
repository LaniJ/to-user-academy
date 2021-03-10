const { userArray } = require("../models");
const { v4: uuidv4 } = require("uuid");

// why uuidv4?
const addNewUser = (data) => {
  userArray.push({ ...data, id: uuidv4() });
};

const getSingleUserById = (id) => userArray.find((el) => el.id === id);

const getSingleUserByEmail = (email) =>
  userArray.find((el) => el.email === email);

  // user index should be the position of the user in the array
const getUserIndex = (id) => userArray.findIndex((el) => el.id === id);

const updateUserProfile = (data, id) => {
  const userDetails = getSingleUser(id);
  const updatedProfile = { ...userDetails, ...data };
  const index = getUserIndex(id);
  userDetails[index] = updatedProfile;
  return updatedProfile;
};

const deleteUser = (id) => {
  const index = getUserIndex(id);
  return userArray.splice(index, 1);
};

module.exports = {
  addNewUser,
  deleteUser,
  updateUserProfile,
  getSingleUserById,
  getSingleUserByEmail,
};
