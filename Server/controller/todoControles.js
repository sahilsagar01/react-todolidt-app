const Modal = require("../modals/TodoModal");

const createTodo = async (req, res) => {
  const todoInput = req.body;
  console.log(todoInput)
  if (todoInput) {
    try {
      const newTodo = new Modal({
        todo: todoInput.todo,
        date: todoInput.date,
        isDone: todoInput.isDone,
      })
      newTodo.save()
      .then(doc => {
       if(doc){
        res.json("New todo added")
       }else{
        res.json("Operation failed")
       }
      })
    } catch (err) {
      res.json(err.message);
    }
  } else {
    res.json({
      item: false,
      message: "Cannot add empty todo!",
    });
  }
};

const getAllTodo = async (req, res) => {
  try {
    const allTodo = await Modal.find();
    res.json(allTodo);
  } catch (err) {
    res.json(err.message);
  }
};

// const getTodo = async(req, res) => {
//     try{

//     }
//     catch(err){
//         console.log(err)
//     }
// }

const updateTodo = async (req, res) => {
  const todo = req.body;
  console.log(todo)
  if(todo){
    try {
      await Modal.findByIdAndUpdate(
        { _id: req.params.id }, 
        { $set: todo }
      )
      .then(doc => {
        console.log(doc , "line ")
        if(doc){
          if(doc.isDone === false){
            res.json({
              isDone: true,
              message: "updated"
            })
          }
          else{
            res.json({
              isDone: false,
              message: "updated"
            })
          }
         
        }else{
          res.json("Operation failed")
        }
      })
    } catch (err) {
      res.json(err.message);
    }
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id
  try {
    await Modal.findByIdAndDelete(id)
    .then((doc) => {
      if(doc){
        res.json("Todo deleted")
      }else{
        res.json("Task not found")
      }
    })
  } catch (err) {
    res.json(err.message)
    }
};

module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
