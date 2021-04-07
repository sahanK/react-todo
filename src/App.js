import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //USE EFFECT RUN ONCE
  useEffect(()=>{
    //Get from local
    if(localStorage.getItem("todos") === null || JSON.parse(localStorage.getItem("todos")).length <= 0){
      // let item;
      // let dummies = [];
      // for(item = 1; item <= 5; item++){
      //   dummies.push({text: `dummy ${item}`, completed: false, id: Math.random()*1000});
      // }
      // setTodos(dummies);
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
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

  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} status={status}/>
    </div>
  );
}

export default App;
