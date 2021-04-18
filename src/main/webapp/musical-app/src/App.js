import { Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Header></Header>

      <Route path="/Login" exact={true} component={LoginPage}></Route>
    </div>
  );
}

export default App;
