import "./App.css";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/content" element={<ContentPage />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
