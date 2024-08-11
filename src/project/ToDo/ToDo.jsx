import { useEffect, useState } from "react";
// import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./ToDo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";
export const ToDo = () => {
  //for storing inputValue in arrayu

  const [task, setTask] = useState(getLocalStorageTodoData());
  

  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;

    //to check if the field is empty or not
    if (!content) return; //i.e data ko store mt krna

    // to check if the data is already existing or not
    // if (task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find((curTask)=>curTask.content === content);  //find pehle hi elem find krta h aur bahar aa jata h
     if(ifTodoContentMatched) return;
       
    setTask((prevTask) => [...prevTask, {id,content,checked}]);
    //{id:id, content:content, checked:checked} iska short form likha h
  };

  //add todo to local storage
  setLocalStorageTodoData(task);
  

  //todo handleDeleteTodo Functionality
  const handleDeleteTodo = (value) => {
    // console.log(value);
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  //todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };


  //todo handleCheckedTodo functionality
  const handleCheckedTodo = (value)=>{
    const updatedTask = task.map((curTask)=>{
      if(curTask.content === value){
        return {...curTask, checked: !curTask.checked}
      }
      else{
        return curTask;
      }
    })
    setTask(updatedTask);
  }
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <TodoDate/>
      </header>
      <TodoForm AddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked = {curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo = {handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
