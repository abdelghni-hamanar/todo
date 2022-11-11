import './App.css';
import Navbar from './components/Navbar';
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import Account from './components/pages/Account';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
          <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/account' element={<Account />}/>
          </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
