const { Blog } = require("../models/blog");
const { client } = require('../db/mongoDB');

exports.getAllBlog = async (req, res) => {
    try
    {
        const database = client.db('blogs');
        const collection = database.collection('blog');
        const query = {}; // Add your query criteria here
        const result = await collection.find(query).toArray();
        
        const blogs = await Blog.find();
        res.status(200).json({blogs : result})
    }
    catch(error) 
    {
        res.status(404).json({ message: "Blog not found", error: error.message })
    }
};

exports.postCreateBlog = (req, res) => {
    Blog.create(req.body)
        .then((data) => res.json({ message: "Blog added successfully", data }))
        .catch((err) =>
            res.status(400).json({ message: "Failed to add Blog", error: err.message })
        );
};

exports.putUpdateBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res.status(400).json({ message: "Failed to update Blog", error: err.message })
        )
};

exports.deleteBlog = (req, res) => {
    Blog.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Blog deleted successfully", data })
        )
        .catch((err) =>
            res.status(404).json({ message: "book not found", error: err.message })
        );
};