import React, {useState, useEffect, useContext} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';
import {TodosContext} from './TodosContext';

const Home = () => {
    //Context
    const {todos,dispatch} = useContext(TodosContext);
    //State
    const [inputText, setInputText] = useState("");
    //const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [newItemAddingInProgress, setNewItemAddingInProgress] = useState(false);

    //USE EFFECT
    useEffect(()=>{
    //Set state
    switch(status){
        case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
        setFilteredTodos(todos);
        break;
    }
    //Save to local
    //localStorage.setItem("todos", JSON.stringify(todosState));
    },[todos, status]);

    return(
        <div>
            <header>
                <h1>Todo list</h1>
            </header>
            <Form 
                todos={todos} 
                dispatch={dispatch}
                inputText={inputText} 
                setInputText={setInputText} 
                setStatus={setStatus} 
                newItemAddingInProgress={newItemAddingInProgress} 
                setNewItemAddingInProgress={setNewItemAddingInProgress}/>
            <TodoList todos={todos} dispatch={dispatch} filteredTodos={filteredTodos} status={status}/>
            <Footer todos={todos}/>
        </div>
    );
}

export default Home;