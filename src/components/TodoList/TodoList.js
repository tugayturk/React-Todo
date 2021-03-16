import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
     return (
    <div>
      <ul >
        {props.todos.map((todo) => {
          return (
          <TodoItem 
          {...todo}
           key={todo.id}
            className="list-group-item" 
            onClick={props.removeItem}
            removeItem={props.removeItem}
            />
          
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
