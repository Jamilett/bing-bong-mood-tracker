import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Landing from "./pages/landing";
import Signup from "./pages/createaccount";
import Quote from "./pages/quote";
import Moodlog from "./pages/moodlog";

function App() {
  useEffect(() => {
    // 👇 Esto importa Flowbite dinámicamente (ignora el error de TypeScript si aparece)
    // @ts-ignore
    import("flowbite/dist/flowbite.min.js");
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Landing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/moodlog" element={<Moodlog />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
