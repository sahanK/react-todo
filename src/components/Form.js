import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (event) =>{
        setInputText(event.target.value); 
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }

    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" clsassName="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
} 

export default Form;