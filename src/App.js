import './App.css';
//import {useRoutes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import routes from './routes'

function App() {

  const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

  return (
    (routeComponents)
  );
}

export default App;
