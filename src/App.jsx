import "./App.css";
import { Routes, Route } from "react-router";
import AuthPage from "./pages/Auth/AuthPage";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Route */}
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
