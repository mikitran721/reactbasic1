import React from "react";
import "./ListTodos.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  //sd spread array
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Addnew success!");
  };

  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "reading book" },
      { id: "todo3", title: "Practising ReactJS" },
    ],
    editTodo: {},
  };

  handleDeleteTodo = (todo) => {
    // console.log(`>>check delete todo: `, todo);
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Deleted todo!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      //Find index of specific object using findIndex method.
      let objIndex = listTodosCopy.findIndex((obj) => obj.id === todo.id);

      //Update object's name property.
      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Updated todo!");
      return;
    }
    // edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(
      `>>check empty todoedit: `,
      isEmptyObj,
      ` edit toto: `,
      editTodo.title
    );

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) => {
                              this.handleOnChangeEditTodo(event);
                            }}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="edit"
                    onClick={() => {
                      this.handleEditTodo(item);
                    }}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={(item) => {
                      this.handleDeleteTodo(item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
