const Todo = require("../models/TodoItem");

// @desc    Get all books
// @route   GET /api/v1/todo
// @access  Private
exports.getItems = async (req, res, next) => {
  try {
    const items = await Todo.find().populate("user");;
    console.log(items);
    res.status(200).json({
      success: true,
      count: items.length,
      data: items.map(
        ({
          _id: id,
          label,
          due_date,
          status,
          user_id: { _id: user_id, name: name },
        }) => ({
          id,
          label,
          due_date,
          status,
          user: {
            id: user_id,
            name: name,
          },
        })
      ),
    });
  } catch (error) {
    console.log(`Error on getting todo items: ${error.message}`.red);
    res.status(500).json({
      success: false,
      errors: ["Unable to get Todo Items"],
    });
  }
};

exports.addTodo = async (req, res, next) => {
  try {
    const { label, due_date } = req.body;
    const item = await Todo.create({
      label:label,
      due_date:due_date,
      status: true,
      user_id: req.user_id,
    });
    res.status(201).json({
      success: true,
      data: {
        id: item.id,
        label: item.label,
        due_date: item.due_date,
        user_id: item.user_id,
      },
    });
  } catch (error) {
    console.log(`Error on adding todo item ${error.message}`.red);
    res.status(500).json({
      success: false,
      errors: ["Unable to add todo item", error.message],
    });
  }
};

// @desc    Delete a book
// @route   DELETE /api/v1/books/:id
// @access  Private
exports.deleteItem = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      throw new Error("Book is not available to remove");
    }
    await book.remove();
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(`Error on deleting book: ${error.message}`.red);
    res.status(500).json({
      success: false,
      errors: ["Unable to remove book", error.message],
    });
  }
};
