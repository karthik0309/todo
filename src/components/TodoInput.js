import React, { useState } from "react";
import { useGlobalStateValue } from "../context";
import styled from 'styled-components'

const Button =styled.button`
  background-color:rgb(155,99,246);
  outline:none;
  border:none;
  color:white;
  width:100px;
  height:40px;
  border-radius:10px;
  font-size:1.2rem;
  margin-left:10px;
  &:hover{
    background-color:rgba(155,99,246,0.8);
    cursor: pointer;
  }
`
const Input=styled.input`
  outline:none;
  border:none;
  height:40px;
  border-radius:10px;
  width:200px;
  font-size:1.4rem;
  margin-left:50px;
`

const H2=styled.h2`
    margin-left:50px;
    font-size:2.3rem;
  `
function TodoInput() {
  let { dispatch } = useGlobalStateValue();
  let [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    dispatch({
      type: "ADD",
      value: {
        completed: false,
        value: input,
      },
    });
    setInput("");
  };

  
  return (
    <div>
      <H2>Add your Todo</H2>
      <Input
        type="text"
        value={input}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Button onClick={handleClick}>Add Todo</Button>
    </div>
  );
}

export default TodoInput;
