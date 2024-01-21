const { auth } = require('../db/config');

const UserExistInFirebase = () => auth.currentUser ? true : false;

const GetCurrentUser = () => {
    if(UserExistInFirebase()) 
    {
        const userCredentials = auth.currentUser;
        console.log("userCredentials : ", userCredentials);
        return userCredentials;
    }
    return null;
}

module.exports = { UserExistInFirebase, GetCurrentUser };