import React, {useState, useEffect} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

const Home = () => {
    //State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [newItemAddingInProgress, setNewItemAddingInProgress] = useState(false);

    //USE EFFECT RUN ONCE
    useEffect(()=>{
        //Get from local
        if(localStorage.getItem("todos") === null || JSON.parse(localStorage.getItem("todos")).length <= 0){
            localStorage.setItem("todos", JSON.stringify([]));
        } else{
            let todolocal = JSON.parse(localStorage.getItem("todos"));
            //Invert Todo completed status
            let todosWithInvertedCompleteStatus = todolocal.map((todo)=> ({...todo, completed: !todo.completed}));
            //console.log(todosWithInvertedCompleteStatus);
            setTodos(todosWithInvertedCompleteStatus);
        }
        },[])

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
    localStorage.setItem("todos", JSON.stringify(todos));
    },[todos, status]);

    return(
        <div>
            <header>
                <h1>Todo list</h1>
            </header>
            <Form 
                todos={todos} 
                setTodos={setTodos}
                inputText={inputText} 
                setInputText={setInputText} 
                setStatus={setStatus} 
                newItemAddingInProgress={newItemAddingInProgress} 
                setNewItemAddingInProgress={setNewItemAddingInProgress}/>
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} status={status}/>
            <Footer todos={todos}/>
        </div>
    );
}

export default Home;