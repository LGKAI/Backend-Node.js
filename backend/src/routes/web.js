const express = require("express");
const {
  getHomepage,
  getABC,
  lgkai,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method("/route", handler);
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/lgkai", lgkai);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router; //export default
