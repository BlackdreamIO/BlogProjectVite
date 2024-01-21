const { auth } = require('../../db/config');

const LogOutUser = async (req, res) => {
    try 
    {
        await auth.signOut()
            .then(() => {
                res.status(200).json({
                    status : "Logged Out User",
                })
            })
            .catch((err) => {
                res.status(200).json({
                    status : "Failed Logged Out User",
                    errorMSG : err.message
                })
            })
    } 
    catch (error) 
    {
        res.status(404).json({
            status : 'Failed To Log Out',
            errorMSG : error.message
        })    
    }
}

module.exports = { LogOutUser };