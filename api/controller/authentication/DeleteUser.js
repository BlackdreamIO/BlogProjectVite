const { auth } = require('../../db/config');
const { UserExistInFirebase } = require('../../utils/UserExist');

const DeleteUser = async (req, res) => {
    try 
    {
        if(UserExistInFirebase())
        {
            const result = await auth.currentUser.delete();
        
            res.status(200).json({
                status : result === undefined ? 'Failed To Delete Account' : "Account Deleted",
            }) 
        }
        res.status(404).json({
            status : 'Failed To Delete Account',
            error : 'No Active Account Found'
        })   
    } 
    catch (error) 
    {
        res.status(404).json({
            status : 'Failed To Delete Account',
            error : error.message
        })    
    }
}

module.exports = { DeleteUser };