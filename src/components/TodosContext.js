import {createContext, useReducer} from 'react';

const TodosContext = createContext();

const todosReducer = (currentTodos, action) => {
    switch(action.type){
        case 'SET':
            return action.todos;
        case 'ADD':
            return [...currentTodos, action.todo];
        case 'DELETE':
            return currentTodos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return currentTodos.map(item => item.id === action.id ? {...item, completed: !item.completed} :item);
        default:
            throw new Error('Should not get here');
    }
}

const TodosContextProvider = ({children}) => {
    //const [todosState, setTodosState] = useState([]);

    const [todos, dispatch] = useReducer(todosReducer, []);
    //todosState, setTodosState

    return( 
        <TodosContext.Provider value={{todos, dispatch}}>
                {children}
        </TodosContext.Provider>
    );
}

export {TodosContext, TodosContextProvider};