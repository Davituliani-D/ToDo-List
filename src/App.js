import "./App.css";
import ToDoList from "./Components/ToDoListComponent/ToDoList";
import React, { useEffect } from "react";
import Context from "./Context";
import AddToDo from "./Components/AddToDoComponent/AddToDo";
import Loader from "./Components/LoaderComponent/Loader";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000);
      });
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addToDo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1>To Do List</h1>
        <AddToDo onCreate={addToDo} />
        {loading && <Loader />}
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No ToDo's!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
