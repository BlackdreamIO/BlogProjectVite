const express = require("express");
const router = express.Router();

const {
    getAllBlog,
    postCreateBlog,
    putUpdateBlog,
    deleteBlog,
} = require("../controller/controller");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", async() => await getAllBlog());

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateBlog);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateBlog);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteBlog);

module.exports = router;