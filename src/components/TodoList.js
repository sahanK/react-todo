import React from 'react';
import Todo from './Todo';
import Expire from './Expire';
import Wait from './Wait';

const TodoList = ({todosState, setTodosState, filteredTodos, status}) => {

    return(
        <div className="todo-container">
            <Expire delay="2000">Loading ...</Expire>
            <Wait delay="2000">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            text={todo.text} 
                            id={todo.id} 
                            todosState={todosState} 
                            setTodosState={setTodosState}
                            todo={todo}/>
                    ))}
                </ul>
                {filteredTodos.length === 0 ? <h3>No Tasks</h3> : <h3 style={{textAlign: 'center'}}>{status} : { filteredTodos.length}</h3>}
            </Wait>
        </div>
        
    );
}

export default TodoList;