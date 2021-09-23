import React from "react";
import { useTodoState } from "./component/Context";
import "./Head.css";

function Head() {
  const todo = useTodoState();
  const undoneTasks = todo.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  return (
    <div className="head_block">
      <h1>{dateString}</h1>
      <div className="head_day">{dayName}</div>
      <div className="head_taskleft">할일 {undoneTasks.length}개남음</div>
    </div>
  );
}

export default Head;
