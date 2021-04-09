import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {TodosContext} from './TodosContext';

const About = (props) => {
    //const location = useLocation();
    //const todoList = location.state.todoList;
    // const history = useHistory();
    // const todoList = history.location.state;

    const {todos, dispatch} = useContext(TodosContext);
    //console.log(`Context: ${todosState[0].text}`);

    const todoButtonClickHandler = (event) => {
        event.preventDefault();
        dispatch({type: 'TOGGLE', id: parseInt(event.target.id)});
    }

    return(
        <div>
            <div className="todo-container">
                <ul >
                    {todos.map(
                        todo => <li className="todo todo-item" key={todo.id}>
                                    {todo.text}
                                    <button onClick={todoButtonClickHandler} id={todo.id}>click me</button>
                                </li>)}
                </ul>
            </div>
            <div style={{textAlign:"center", marginTop: "20vh"}}>
                <Link to="/"><button className="nav-button">Home</button></Link>
            </div> 
        </div>
    )
}

export default About;