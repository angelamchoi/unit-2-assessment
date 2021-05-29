const Todo = require("../data/todos");
let todoList = Todo.todos;

// index
function index(req,res) {
    res.render("index", { todos: todoList });
}

// create
function create(req,res) {
    req.body.done = false;
    todoList.push(req.body);
    res.redirect("/");
}

module.exports = {
    index,
    create,
};