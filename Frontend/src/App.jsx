import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="mainContainer d-flex justify-content-center align-items-center">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
