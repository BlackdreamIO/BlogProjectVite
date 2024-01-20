const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title : {
        type : String,
        required : true
    }
});

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = { Blog };