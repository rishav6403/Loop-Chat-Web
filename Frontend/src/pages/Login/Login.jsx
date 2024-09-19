import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
     <div className="container" id="Login-container">
        <div className="row">
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <div id='heading'>
            <h2>Login to Loop-Chat Account</h2>
            <p className="fs-5 ">Enter your details</p>
            </div>
          </div>
          <div className="col-sm-6  d-flex flex-column justify-content-center align-items-center">
            
          <form className="mt-4 w-100 px-4">
            <label
              htmlFor="username"
              className="font-semibold fs-5 ms-2"
            >
              Username
            </label>
          <div className="container">
            <input className="loginInput rounded"
              type="text"
              placeholder="Enter username"
            />
          </div>
            <label
              htmlFor="username"
              className="font-semibold fs-5 ms-2"
            >
              Password
            </label>
          <div className="container">
            <input className="loginInput rounded"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className=" d-flex justify-content-between align-items-center">
          <button className='btn btn-primary rounded-pill px-4 py-2 ms-2'>Login</button>
          <Link to={"/signup"} >Didn't have an accout?</Link>
          </div>
        </form>
        </div>
          </div>
        </div>
    </>
  );
};

export default Login;
