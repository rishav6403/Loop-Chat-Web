import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="mainContainer d-flex justify-content-center align-items-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home/> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login/>}
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
