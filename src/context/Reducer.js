const Reducer = (currState = {}, action) => {
  switch (action.type) {
    case "ADD":
      return { todoList: [...currState.todoList, action.value] };
    case "DELETE":
      return {
        ...currState,
        todoList: currState.todoList.filter(
          (item, idx) => idx !== action.value
        ),
      };
    case "COMPLETE":
       let temp=[...currState.todoList]
       temp.map((item,index)=>{
           if(index===action.value.index){
               item.completed=action?.value?.completed
           }
           return 1
       })
       return {todoList:temp}
    default:
      return currState;
  }
};

export default Reducer;
