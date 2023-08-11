// eslint-disable-next-line no-unused-vars

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import { AuthProvider } from "./context/authContext";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
