import './App.css';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <UserProvider>
      <Router>
        <LoginForm />
      </Router>
    </UserProvider>
  );
}

export default App;
