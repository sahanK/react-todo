import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const Home = ({todos, setTodos, inputText, setInputText, setStatus, newItemAddingInProgress, setNewItemAddingInProgress, filteredTodos, status}) => {
    return(
        <div>
            <Form 
                todos={todos} 
                setTodos={setTodos}
                inputText={inputText} 
                setInputText={setInputText} 
                setStatus={setStatus} 
                newItemAddingInProgress={newItemAddingInProgress} 
                setNewItemAddingInProgress={setNewItemAddingInProgress}/>
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} status={status}/>
        </div>
    );
}

export default Home;