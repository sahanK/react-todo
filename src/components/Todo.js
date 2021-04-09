import React from 'react';

const Todo = ({text, todo, todos, dispatch}) => {
        
    //Events
    const deleteHandler = () => {
        dispatch({type: 'DELETE', id: todo.id});
    }

    const completeHandler = () => {
        dispatch({type: 'TOGGLE', id: todo.id});
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash" ></i>
            </button>
        </div>
    );
}

export default Todo; 