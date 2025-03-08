import { Route, Routes } from "react-router";
import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyUserPage from "./pages/VerifyUserPage";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify-user" element={<VerifyUserPage />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
