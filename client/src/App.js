import { Switch, Route } from 'react-router';
import Giris from './pages/Giris';
import Kayit from './pages/Kayit';
import './App.css';
import AdminPanel from './admin/AdminPanel';
import axios from 'axios';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export const axiosInstance = axios.create({ baseURL: "http://localhost:5000", proxy: true, withCredentials: true });


function App() {
  const [user, setUser] = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user.username != '')
      history.push("/admin");
  }, [user]);

  useEffect(async () => {
    const { data } = await axios.get("/isAuth", { withCredentials: true });
    setUser(data);
    console.log(data)
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {user.role == "" ? <Giris /> : <AdminPanel />}
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
