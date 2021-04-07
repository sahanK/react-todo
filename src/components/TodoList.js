import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos, status}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        id={todo.id} 
                        todos={todos} 
                        setTodos={setTodos}
                        todo={todo}/>
                ))}
            </ul>
            {filteredTodos.length === 0 ? <h3>No Tasks</h3> : <h3 style={{textAlign: 'center'}}>{status} : { filteredTodos.length}</h3>}
        </div>
    );
}

export default TodoList;