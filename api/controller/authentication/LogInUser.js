const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../../db/config');

const LogInUser = async(req, res) => {
    try 
    {
        const user_email = req.body.email;
        const user_password = req.body.password;

        const isVaildEmail = user_email.length > 0;
        const isVaildPassword = user_password.length > 0;

        if(isVaildEmail && isVaildPassword) 
        {
            const currentUser = await signInWithEmailAndPassword(auth, user_email, user_password)
                .then((userCredential) => userCredential)
                .catch(() => "");

            res.status(200).json({
                status : currentUser ? 'Successfully Logged In' : 'Failed In Authentication',
                error : ''
            })
        }
    } 
    catch (error) 
    {
        res.status(404).json({
            status : 'Failed To Logged In',
            errorMSG : error.message
        })
    }
}

module.exports = { LogInUser };