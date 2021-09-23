import React, { useState } from "react";
import "../css/Add.css";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";
import { useTodoDispatch, useTodoNextId } from "./Context";

const CircleButton = styled.button`
  background: lightsalmon;
  &:hover {
    background: salmon;
  }
  &:active {
    background: rgb(202, 80, 32);
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border: none;
  outline: none;
  border-radius: 50%;

  transition: 0.125s all ease-in
    ${(props) =>
      props.open &&
      css`
        background: #ff6b6b;
        &:hover {
          background: #ff8787;
        }
        &:active {
          background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
      `};
`;

const InsertFormPosition = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecf;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function Add() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <InsertFormPosition>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할일 입력"
              autoFocus
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPosition>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(Add);
