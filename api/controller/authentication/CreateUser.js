const { createUserWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../../db/config');

const CreateNewUser = async (req, res) => {
    try 
    {
        const user_email = req.body.email;
        const user_password = req.body.password;

        const isVaildEmail = user_email.length > 0;
        const isVaildPassword = user_password.length > 0;

        if(isVaildEmail && isVaildPassword) 
        {
            const currentUser = await createUserWithEmailAndPassword(auth, user_email, user_password)
                .then((userCredential) => userCredential)
                .catch((error) => error);
            
            const isExistingUser = currentUser.user ? false : true;
            
            if(!isExistingUser) 
            {
                res.status(200).json({
                    statusCode : 'Account Created Successfully',
                    userEmail : currentUser.email,
                    userUUID : currentUser.uid,
                    userName : currentUser.displayName
                });
            }
            else 
            {
                res.status(404).json({
                    statusCode : 'User Already Exist',
                    userEmail : user_email,
                    userUUID :  '',
                    userName : user_password
                });
            }
        }  
    } 
    catch (error) 
    {
        res.status(404).json({
            status : 'Failed',
            error : error
        })
    }
}

module.exports = { CreateNewUser };