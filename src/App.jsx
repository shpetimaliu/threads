// eslint-disable-next-line no-unused-vars

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./context/authContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/feed";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Feed />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
