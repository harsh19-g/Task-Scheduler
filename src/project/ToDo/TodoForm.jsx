import { useState } from "react";

export const TodoForm = ({ AddTodo }) => { 
  //for updated form value
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id:value, content:value, checked:false}); // ab empty string se ye wali value bn jayegi
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    AddTodo(inputValue);
    setInputValue({id:"", content: "", checked : ""});
  };
  return (
    <section className="form" onSubmit={handleFormSubmit}>
      <form>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
