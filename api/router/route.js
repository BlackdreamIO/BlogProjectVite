const express = require("express");
const router = express.Router();

const { getAllBlogs, createNewUser, logInUser, logOutUser } = require("../controller/controller");


router.get("/blog", getAllBlogs);

router.post('/signUp', createNewUser);

router.post('/logIn', logInUser);

router.post('/logOut', logOutUser);

module.exports = router; 