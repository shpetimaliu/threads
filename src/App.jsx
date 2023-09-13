import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { AuthProvider } from "./context/authContext";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ThreadPage from "./pages/ThreadPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Feed />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/thread/:id" element={<ThreadPage />} />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </Router>
  );
}

export default App;
