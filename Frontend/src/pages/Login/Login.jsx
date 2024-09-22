import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
   
  const { loading, login } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();
    await login({userName, password});
  }
  return (
    <>
      <div className="container" id="Login-container">
        <div className="row">
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <div id="heading">
              <h2>Login to Loop-Chat Account</h2>
              <p className="fs-5 ">Enter your details</p>
            </div>
          </div>
          <div className="col-sm-6  d-flex flex-column justify-content-center align-items-center">
            <form className="mt-4 w-100 px-4" onSubmit={handleSubmit}>
              <label htmlFor="username" className="font-semibold fs-5 ms-2">
                Username
              </label>
              <div className="container">
                <input
                  className="loginInput rounded"
                  type="text"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <label htmlFor="username" className="font-semibold fs-5 ms-2">
                Password
              </label>
              <div className="container">
                <input
                  className="loginInput rounded"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-primary rounded-pill px-4 py-2 ms-2"
                  disabled = {loading}
                >
                  {loading ? (
                    <Loader/>
                  ) : (
                    "Login"
                  )}
                </button>
                <Link to={"/signup"}>Didn't have an accout?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
