import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container" id="Signup-container">
        <div className="row">
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <div id='heading'> 
            <h2>Create a Loop Chat Account</h2>
            <p className="fs-5 ">Enter your details</p>
            </div>
          </div>
          <div className="col-sm-6  d-flex flex-column justify-content-center align-items-center">
            
          <form className="mt-4 w-75">
            <label
              htmlFor="username"
              className="font-semibold fs-5 ms-2"
            >
              Fullname
            </label>
          <div className="container">
            <input className="signupInput rounded"
              type="text"
              placeholder="Enter fullname"
            />
          </div>
            <label
              htmlFor="username"
              className="font-semibold fs-5 ms-2"
            >
              Username
            </label>
          <div className="container">
            <input className="signupInput rounded"
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
            <input className="signupInput rounded"
              type="password"
              placeholder="Enter password"
            />
          </div>
            <label
              htmlFor="username"
              className="font-semibold fs-5 ms-2"
            >
              Confirm Password
            </label>
          <div className="container">
            <input className="signupInput rounded"
              type="password"
              placeholder="Enter confirmpassword"
            />
          </div>
          <div className="genderBox d-flex gap-2">
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check flex flex-column ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          <div className="mt-4 ms-3 d-flex justify-content-between align-items-center">
          <button className='btn btn-primary rounded-pill px-4 py-2'>Signup</button>
          <Link to={"/login"}>Already have an accout?</Link>
          </div>
        </form>
        </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;
