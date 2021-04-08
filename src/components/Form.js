import React from 'react';
//import Expire from './Expire'

const Form = ({inputText, setInputText, todos, setTodos, setStatus, newItemAdded, setNewItemAdded}) => {
    const inputTextHandler = (event) =>{
        setInputText(event.target.value); 
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(inputText === ""){
            alert("Please add a task!");
        } else{
            let uncompleted = todos.filter(todo => todo.completed === false);
            if(uncompleted.length >= 5){
                alert("There are Many uncompleted tasks!");
            } else{
                setNewItemAdded(true);
                setTimeout(()=>{
                    setTodos([
                        ...todos, {text: inputText, completed: false, id: Math.random()*1000}
                    ]);
                    setInputText("");
                    setNewItemAdded(false);
                },2000);
            }
        }
    }

    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return(
        <div className="form-container">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <button onClick={submitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div onChange={statusHandler} className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            {newItemAdded ? <h3>Adding ...</h3> : ""}
        </div>
    );
} 

export default Form;