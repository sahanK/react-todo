import {createContext, useState} from 'react';

const TodosContext = createContext();

const TodosContextProvider = ({children}) => {
    const [todosState, setTodosState] = useState([]);

    return( 
        <TodosContext.Provider value={{todosState, setTodosState}}>
                {children}
        </TodosContext.Provider>
    );
}

export {TodosContext, TodosContextProvider};