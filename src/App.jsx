import { Route, Routes } from "react-router";
import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import VerifyUserPage from "./pages/Auth/VerifyUserPage";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify-user" element={<VerifyUserPage />} />

        {/* Private Routes - Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >
          <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
          <Route path="books" element={<AdminBooksPage />} />
          <Route path="burrows" element={<h1>Burrows Page</h1>} />
          <Route path="reviews" element={<h1>Reviews Page</h1>} />
          <Route path="students" element={<h1>Students Page</h1>} />
        </Route>
        {/* Private Route - Student Route */}
        <Route path="/students" element={<StudentLayout />}>
          <Route path="books" element={<StudentsBooksPage />} />
          <Route path="book/:_id" element={<BookDetailsPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
