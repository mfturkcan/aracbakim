import { Switch, Route } from 'react-router';
import LoginDashboard from './pages/LoginDashboard';
import RegisterDashboard from './pages/RegisterDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginDashboard />
        </Route>
        <Route path="/login">
          <LoginDashboard />
        </Route>
        <Route path="/register">
          <RegisterDashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
