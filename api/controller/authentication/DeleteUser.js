const { auth } = require('../../db/config');

const DeleteUser = async (req, res) => {
    try 
    {
        const result = await auth.currentUser.delete();
        
        res.status(200).json({
            status : result === undefined ? 'Failed To Delete Account' : "Account Deleted",
        })    
    } 
    catch (error) 
    {
        res.status(404).json({
            status : 'Failed To Delete Account',
            error : error.message
        })    
    }s
}

module.exports = { DeleteUser };