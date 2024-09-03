import { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import SignInForm from "./Pages/SignInForm";
import SignUpForm from "./Pages/SignUpForm";

import HomeView from "./Pages/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path="/" element={<SignUpForm onRegister={handleRegister} />} />

      <Route path="/WelcomeView" element={<HomeView />} />
      <Route path="/sign-in" element={<SignInForm onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;
