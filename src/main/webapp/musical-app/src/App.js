import { Route } from 'react-router';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MusicalAdd from './pages/MusicalAdd';

function App() {
  return (
    <Background>
      <Header></Header>
      <MainPage></MainPage>

      <Route path="/Login" exact={true} component={LoginPage}></Route>
      <Route path="/Register" exact={true} component={Register}></Route>
      <Route path="/MusicalAdd" exact={true} component={MusicalAdd}></Route>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 20%,
      rgba(20, 20, 20, 0.7) 60%,
      rgba(20, 20, 20, 1)
    ),
    url(https://t1.daumcdn.net/news/202001/14/xportsnews/20200114150830171pyol.jpg);
  background-size: cover;
`;

export default App;
