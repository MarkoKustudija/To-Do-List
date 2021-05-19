import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function changeOnClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={changeOnClick}>
      <li style={{ textDecoration: isDone ? "line-through" : null }}>
        {" "}
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
