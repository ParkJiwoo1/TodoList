import React from "react";
import Item from "./Item";
import { useTodoState } from "./Context";

function List() {
  const todos = useTodoState();
  return (
    <div className="list_block">
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </div>
  );
}

export default List;
