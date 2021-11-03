import { Switch, Route } from 'react-router';
import Giris from './pages/Giris';
import Kayit from './pages/Kayit';
import './App.css';
import AdminPanel from './admin/AdminPanel';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Giris />
        </Route>
        <Route path="/login">
          <Giris />
        </Route>
        <Route path="/register">
          <Kayit />
        </Route>
        <Route path="/admin">
          <AdminPanel />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
