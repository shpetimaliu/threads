// eslint-disable-next-line no-unused-vars

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
