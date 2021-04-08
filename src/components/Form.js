import React from 'react';
//import Expire from './Expire'

const Form = ({inputText, setInputText, todos, setTodos, setStatus, newItemAddingInProgress, setNewItemAddingInProgress}) => {
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
                setNewItemAddingInProgress(true);
                setTimeout(()=>{
                    // let prevState = [...todos];
                    // let newTask = {text: inputText, completed: false, id: Math.random()*1000};
                    // let newState = [...prevState, newTask];
                    setTodos((todos) => ([...todos, {text: inputText, completed: false, id: Math.random()*1000}]));
                    // setTodos([
                    //     ...todos, {text: inputText, completed: false, id: Math.random()*1000}
                    // ]);
                    setInputText("");
                    setNewItemAddingInProgress(false);
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
            {newItemAddingInProgress ? <h3>Adding ...</h3> : ""}
        </div>
    );
} 

export default Form;