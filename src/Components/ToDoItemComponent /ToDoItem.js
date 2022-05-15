import React, { useContext } from "react";
import classes from "./ToDoItem.module.css";
import Context from "../../Context";

const ToDoItem = ({ todo, onChange }) => {
  const { removeTodo } = useContext(Context);
  const classesItems = [];
  if (todo.completed) {
    classesItems.push(classes.done);
  }
  return (
    <li className={classes.liStyle}>
      <span className={classesItems.join(" ")}>
        <input
          className={classes.inputStyle}
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        {todo.title}
      </span>
      <button className={classes.rm} onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
};

export default ToDoItem;
