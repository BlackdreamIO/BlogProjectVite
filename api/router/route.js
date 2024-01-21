const express = require("express");
const router = express.Router();

const { 
    getAllBlogs, 
    signUpUser, 
    logInUser, 
    logOutUser, 
    deleteCurrentUser,
    userExist,
    getCurrentUser
} = require("../controller/controller");


router.get("/blog", getAllBlogs);

// // Authentication Route

// router.post('/signUp', signUpUser);

// router.post('/logIn', logInUser);

// router.post('/logOut', logOutUser);

// router.delete('/deleteUser', deleteCurrentUser);

// // Utils Route

// router.get('/userExist', userExist);

// router.get('/getCurrentUser', getCurrentUser)

module.exports = router; 