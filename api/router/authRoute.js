const express = require("express");
const authRouter = express.Router();

const { 
    signUpUser, 
    logInUser, 
    logOutUser, 
    deleteCurrentUser,
    userExist,
    getCurrentUser
} = require("../controller/controller");


authRouter.post('/signUp', signUpUser);

authRouter.post('/logIn', logInUser);

authRouter.post('/logOut', logOutUser);

authRouter.delete('/deleteUser', deleteCurrentUser);

// Utils Route

authRouter.get('/userExist', userExist);

authRouter.get('/getCurrentUser', getCurrentUser)

module.exports = authRouter; 