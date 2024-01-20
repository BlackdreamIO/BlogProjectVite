const { auth } = require('../db/config');

const UserExistInFirebase = () => {
    try 
    {
        const hasUser = auth.currentUser ? true : false;
        return hasUser;
    } 
    catch (error) 
    {
        return false;    
    }
}

module.exports = UserExistInFirebase;