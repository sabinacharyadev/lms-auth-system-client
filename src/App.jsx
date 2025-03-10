import { Route, Routes } from "react-router";
import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyUserPage from "./pages/Auth/VerifyUserPage";
import BooksPage from "./pages/Student/BooksPage";
import StudentPrivateRoute from "./components/PrivateStudentRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify-user" element={<VerifyUserPage />} />

        {/* Private Route - Student Route */}
        <Route
          path="/books"
          element={
            <StudentPrivateRoute>
              <BooksPage />
            </StudentPrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
