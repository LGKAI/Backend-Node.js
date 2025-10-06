const connection = require("../config/database");
const {
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../services/CRUDServices");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check abc");
};

const lgkai = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserByID(userID);
  res.render("edit.ejs", { userEdit: user });
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.mycity;
  // let {email, name, city} = req.body;

  console.log(">>> email: ", email, " name: ", name, " city: ", city);

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //     VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("user created successfully");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  res.send("user created successfully");
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.mycity;
  let userID = req.body.userID;

  await updateUserByID(email, name, city, userID);

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserByID(userID);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userID;

  await deleteUserByID(id);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  lgkai,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
