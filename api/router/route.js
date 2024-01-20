const express = require("express");
const router = express.Router();

const { getAllBlogs, signUpUser, logInUser, logOutUser, deleteUser } = require("../controller/controller");


router.get("/blog", getAllBlogs);

// Authentication

router.post('/signUp', signUpUser);

router.post('/logIn', logInUser);

router.post('/logOut', logOutUser);

router.delete('/deleteUser', deleteUser);

module.exports = router; 