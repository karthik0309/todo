import React, { useContext, useReducer,useEffect } from "react";
import GlobalState from "./Globalstate";
import Reducer from "./Reducer";

const StateProvider=({ children })=>{
  let initialState = {
    todoList: [],
    
  };

  const [state, dispatch] = useReducer(Reducer, initialState,()=>{
    const localData=localStorage.getItem('todoList')
    return localData ? JSON.parse(localData) : initialState
  });

  //Storing in localStorage
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(state))
  },[state])


  return (
    <GlobalState.Provider value={{ state, dispatch }}>
          {children}
    </GlobalState.Provider>
  );
}


export const useGlobalStateValue = () => useContext(GlobalState);
export default StateProvider;
