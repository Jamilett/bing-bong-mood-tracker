import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
