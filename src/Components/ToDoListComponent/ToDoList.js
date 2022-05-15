import React from "react";
import ToDoItem from "../ToDoItemComponent /ToDoItem";
import classes from "./ToDoList.module.css";


const ToDoList = (props) => {
    return (
        <ul className={classes.ulStyle}> 
           {props.todos.map(todo => {
               return <ToDoItem todo={todo} key={todo.id} onChange={props.onToggle}/>
           })}
        </ul>
    )
};

export default ToDoList;