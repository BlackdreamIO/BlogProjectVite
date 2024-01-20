const express = require('express');
const cors = require('cors');
const { ConnectToMongoDB } = require('./db/mongoDB');

const { collection, getDocs, getDoc } = require('firebase/firestore');
const { db } = require('./db/config');

const app = express();

app.use(express.json());
app.use(cors());

//const todo = require("./router/route");
app.use("/api/blog", async (req, res) => {
    const collectionRef = collection(db, 'blogs');
    const documentRef = await getDocs(collectionRef);
    const data = [];
    documentRef.forEach((doc) => {
        data.push(doc.data())
    })
    res.json({blogs : data})
}); 


async function StartServer() 
{
    await ConnectToMongoDB().then(() => console.log("Database Has Connected")).catch(() => console.log("Connection Error"))
    app.listen(3000, () => {
        console.log(`Server is listening on http://localhost:${3000}`);
    });
}
StartServer();
