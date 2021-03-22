import React from "react";
import { useGlobalStateValue } from "../context";
import styled from 'styled-components'

const Ul=styled.ul`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  list-style:none;
  width:400px;
`
const Div=styled.div`
  display:flex;
  justify-content:space-between;
  min-width:300px;
  max-width:auto;
  font-size:1.5rem;
  text-align:left;
  @media (max-width:768px){
    font-size:2rem;
  }
`

const Input=styled.input`
  outline:none;
  border:none;
  width:30px;
  height:25px;
  margin-left:50px;
`
const Del=styled.del`
  opacity:0.7;
`
const H2=styled.h2`
    text-align:center;
    margin-left:30px;
    font-size:2.3rem;
  `

const TodoList=()=> {
  let { state, dispatch } = useGlobalStateValue();
  let { todoList } = state;

  const handleDelete = (index) => {
    dispatch({ type: "DELETE", value: index });
  };

  const handleChage=(e,index)=>{
        dispatch({type:"COMPLETE",
            value:{
                index:index,
                completed:e.target.checked
        }})
  }
  const style={
    cursor:"pointer"
  }
  return (
    <div>
        {todoList.length ===0 && <H2>No Todos left &#127881; &#127881;</H2>}
      <Ul>
        {todoList.map((todos, index) => (
          <Div key={index}>
            <Input type="checkbox" checked={todos.completed} onClick={(e)=>handleChage(e,index)}/>
            {todos.completed ? 
            <li><Del>{todos.value}</Del></li> : 
            <li>{todos.value}</li>}
            <i class="fas fa-trash-alt" 
            style={style}
            onClick={()=>{handleDelete(index)}}
            ></i>
          </Div>
        ))}
      </Ul>
    </div>
  );
}

export default TodoList;
