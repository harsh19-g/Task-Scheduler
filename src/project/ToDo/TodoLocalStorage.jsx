export const getLocalStorageTodoData = ()=>{
  const rawTodos = localStorage.getItem("TodoList");
  if(!rawTodos) return [];
  return JSON.parse(rawTodos);
}

export const setLocalStorageTodoData = (task)=>{
    return localStorage.setItem("TodoList",JSON.stringify(task))
}