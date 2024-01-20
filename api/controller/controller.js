const { collection, getDocs, getDoc, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const { createUserWithEmailAndPassword, deleteUser, updateCurrentUser } = require('firebase/auth');
const { db, auth } = require('../db/config');
const { CreateNewUser } = require('./authentication/CreateUser');
const { LogInUser } = require('./authentication/LogInUser');
const { LogOutUser } = require('./authentication/LogOut');
const { DeleteUser } = require('./authentication/DeleteUser');

// google auth provider code : project-233954112819

const getAllBlogs = async (req, res) => {
    console.log('Getting Blogs');
    try
    {   
        const collectionRef = collection(db, 'blogs');
        const documentsRef = await getDocs(collectionRef);
        const data = [];
        documentsRef.forEach((doc) => {
            data.push(doc.data())
        })
        res.status(200).json({blogs : data})
    }
    catch(error) 
    {
        res.status(404).json({ message: "Blog not found", error: error.message })
    }
}

const signUpUser = async (req, res) => await CreateNewUser(req, res);

const logInUser = async (req, res) => await LogInUser(req, res);

const logOutUser = async (req, res) => await LogOutUser(req, res);

const deleteUser = async (req, res) => await DeleteUser(req, res);

module.exports = { 
    getAllBlogs, 
    signUpUser,
    logInUser,
    logOutUser,
    deleteUser
}