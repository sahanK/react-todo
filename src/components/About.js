import {Link,useLocation} from 'react-router-dom';

const About = (props) => {
    const location = useLocation();
    const todoList = location.state.todoList;
    console.log(todoList);
    return(
        <div>
            <div style={{textAlign: "center", paddingTop: "20vh"}}>
                <ul>
                    {todoList.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
            </div>
            <div style={{textAlign:"center", marginTop: "20vh"}}>
                <Link to="/"><button className="nav-button">Home</button></Link>
            </div> 

        </div>
    )
}

export default About;