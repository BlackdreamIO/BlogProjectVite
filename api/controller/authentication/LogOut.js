const { auth } = require('../../db/config');

const LogOutUser = async (req, res) => {
    try 
    {
        const result = await auth.signOut();
        
        res.status(200).json({
            status : result === undefined ? 'Failed To Log Out' : "Logged Out User",
        })    
    } 
    catch (error) 
    {
        res.status(404).json({
            status : 'Failed To Log Out',
            error : error.message
        })    
    }s
}

module.exports = { LogOutUser };