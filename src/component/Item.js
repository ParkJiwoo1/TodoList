import React from "react";
import "../css/Item.css";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "./Context";

function Item({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });
  return (
    <div className="item_block">
      <div className="item_circle" done={done} onClick={onToggle}>
        {done === true ? <MdDone /> : <></>}
      </div>
      <div className="item_text" done={done}>
        {done === true ? (
          <div style={{ color: "lightgray" }}>{text}</div>
        ) : (
          <div>{text}</div>
        )}
      </div>
      <div className="item_remove" onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
}

export default Item;
