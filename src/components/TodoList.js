import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
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
            <h3 style={{textAlign: 'center'}}>Tasks : {filteredTodos.length}</h3>
        </div>
    );
}

export default TodoList;