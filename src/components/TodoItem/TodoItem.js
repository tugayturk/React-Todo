import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content,id,removeItem } = props;
  return <div className="todoItem">
    <li className="list-group-item">
    {content}
    <button 
    className="button" 
    onClick={(e) => {
      removeItem(id);
      e.stopPropagation();
    }}>
      Sil</button>
     </li>
  </div>
  
}

export default Todo;
