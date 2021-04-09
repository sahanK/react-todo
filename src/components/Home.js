import React, {useState, useEffect, useContext} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';
import {TodosContext} from './TodosContext';

const Home = () => {
    //Context
    const {todosState,setTodosState} = useContext(TodosContext);
    //State
    const [inputText, setInputText] = useState("");
    //const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [newItemAddingInProgress, setNewItemAddingInProgress] = useState(false);

    //USE EFFECT RUN ONCE
    // useEffect(()=>{
    //     //Get from local
    //     // if(localStorage.getItem("todos") === null || JSON.parse(localStorage.getItem("todos")).length <= 0){
    //     //     localStorage.setItem("todos", JSON.stringify([]));
    //     // } else{
    //     //     let todolocal = JSON.parse(localStorage.getItem("todos"));
    //     //     //Invert Todo completed status
    //     //     let todosWithInvertedCompleteStatus = todolocal.map((todo)=> ({...todo, completed: !todo.completed}));
    //     //     //console.log(todosWithInvertedCompleteStatus);
    //     //     setTodos(todosWithInvertedCompleteStatus);
    //     //     setTodosState(todosWithInvertedCompleteStatus);
    //     // }
    //     setTodosState([...todosState]);
    //     console.log(todosState);
    //     },[])

    //USE EFFECT
    useEffect(()=>{
    //Set state
    switch(status){
        case "completed":
        setFilteredTodos(todosState.filter(todo => todo.completed === true));
        break;
        case "uncompleted":
        setFilteredTodos(todosState.filter(todo => todo.completed === false));
        break;
        default:
        setFilteredTodos(todosState);
        break;
    }
    //Save to local
    //localStorage.setItem("todos", JSON.stringify(todosState));
    },[todosState, status]);

    return(
        <div>
            <header>
                <h1>Todo list</h1>
            </header>
            <Form 
                todosState={todosState} 
                setTodosState={setTodosState}
                inputText={inputText} 
                setInputText={setInputText} 
                setStatus={setStatus} 
                newItemAddingInProgress={newItemAddingInProgress} 
                setNewItemAddingInProgress={setNewItemAddingInProgress}/>
            <TodoList todosState={todosState} setTodosState={setTodosState} filteredTodos={filteredTodos} status={status}/>
            <Footer todosState={todosState}/>
        </div>
    );
}

export default Home;