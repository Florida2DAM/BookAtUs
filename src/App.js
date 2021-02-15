import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Users from './assets/js/Users.js';
import Product from './assets/js/Products.js';

function App() {
  return (
    <div className="App">
      <div className={'mainMenu'}>
        <NavLink to={'/Users'}>
          <div className={'mainMenuButton'}>
            <h2>Users</h2>
          </div>
        </NavLink>
        <NavLink to={'/products'}>
          <div className={'mainMenuButton'}>
            <h2>Products</h2>
          </div>
        </NavLink>
      </div>
      <div className={'display'}>
        <Switch>
          <Route path={'/Users'}><Users /></Route>
          <Route path={'/products'}><Product /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
