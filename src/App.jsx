import React from "react";
import ApiProvider from "./contexts/ApiContext";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ApiProvider>
      <Dashboard />
    </ApiProvider>
  );
}

export default App;
