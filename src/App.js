import './App.css';
import {Route} from 'react-router-dom';
import routes from './routes'
import {TodosContextProvider} from './components/TodosContext';

function App() {

  const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
  return (
    <TodosContextProvider>
        {(routeComponents)}
    </TodosContextProvider>

  );
}

export default App;
