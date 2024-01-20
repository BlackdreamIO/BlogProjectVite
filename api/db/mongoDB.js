const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Hamim:passwordMongo@cluster0.88g10s3.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const ConnectToMongoDB = async () => {
    if (!client) 
    {
        try 
        {
            await MongoClient.connect(uri, client);
            console.log("Connected to MongoDB");
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    return client;
};

ConnectToMongoDB().catch(console.dir);

module.exports = { ConnectToMongoDB, client }