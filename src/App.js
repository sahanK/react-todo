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
      console.log(todosWithInvertedCompleteStatus);
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

  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} newItemAddingInProgress={newItemAddingInProgress} setNewItemAddingInProgress={setNewItemAddingInProgress}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} status={status}/>
    </div>
  );
}

export default App;
