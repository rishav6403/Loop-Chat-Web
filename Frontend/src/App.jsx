import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="mainContainer d-flex justify-content-center align-items-center">
      {/* <Login />
      <SignUp /> */}
      <Home/>
    </div>
  );
}

export default App;
