import {} from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Tasks } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="tasks" element={<Tasks />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
