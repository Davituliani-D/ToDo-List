import React, {useState} from "react";
import classes from "./AddToDo.module.css";

const AddToDo = ({onCreate }) => {
    const [value, setValue] = useState ("");

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()){
            onCreate(value)
            setValue(" ")
        }
    }
  return (
    <form className={classes.formStyle} onSubmit={submitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit">Add ToDo: </button>
    </form>
  );
};

export default AddToDo;
 