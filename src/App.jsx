import { Route, Routes } from "react-router";
import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path="/" element={<AuthPage />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
