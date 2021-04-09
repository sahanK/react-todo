import React from 'react';
//import {TodosContext} from './TodosContext';
//import Expire from './Expire'

const Form = ({inputText, setInputText, todos, dispatch, setStatus, newItemAddingInProgress, setNewItemAddingInProgress}) => {
    //Context
    //const {todosState, setTodosState} = useContext(TodosContext);
    
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
                    dispatch({type: 'ADD', todo: {text: inputText, completed: false, id: Math.round(Math.random()*1000)}});
                    //setTodosState((todosState) => ([...todosState, {text: inputText, completed: false, id: Math.round(Math.random()*1000)}]));
                    //Set to Context
                    //setTodosState(todos);

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