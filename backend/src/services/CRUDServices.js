const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserByID = async (userID) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userID]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserByID = async (email, name, city, userID) => {
  let [results, fields] = await connection.query(
    `UPDATE Users
     SET email = ?, name = ?, city = ?
     WHERE id = ?`,
    [email, name, city, userID]
  );
};

const deleteUserByID = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [id]
  );
};

module.exports = {
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
};
