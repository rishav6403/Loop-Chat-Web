import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="mainContainer d-flex justify-content-center align-items-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
