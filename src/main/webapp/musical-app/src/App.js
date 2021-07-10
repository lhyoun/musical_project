import { Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <Header></Header>

      <Route path="/Login"    exact={true} component={LoginPage}></Route>
      <Route path="/Register" exact={true} component={Register}></Route>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
