import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import Loader from "../../components/loader/Loader";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <>
      <div className="container" id="Signup-container">
        <div className="row">
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <div id="heading">
              <h2>Create a Loop Chat Account</h2>
              <p className="fs-5 ">Enter your details</p>
            </div>
          </div>
          <div className="col-sm-6  d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="mt-4 w-75">
              <label htmlFor="username" className="font-semibold fs-5 ms-2">
                Fullname
              </label>
              <div className="container">
                <input
                  className="signupInput rounded"
                  type="text"
                  placeholder="Enter fullname"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <label htmlFor="username" className="font-semibold fs-5 ms-2">
                Username
              </label>
              <div className="container">
                <input
                  className="signupInput rounded"
                  type="text"
                  placeholder="Enter username"
                  value={inputs.userName}
                  onChange={(e) =>
                    setInputs({ ...inputs, userName: e.target.value })
                  }
                />
              </div>
              <label htmlFor="username" className="font-semibold fs-5 ms-2">
                Password
              </label>
              <div className="container">
                <input
                  className="signupInput rounded"
                  type="password"
                  placeholder="Enter password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <label htmlFor="username" className="font-semibold fs-5 ms-2">
                Confirm Password
              </label>
              <div className="container">
                <input
                  className="signupInput rounded"
                  type="password"
                  placeholder="Enter confirmpassword"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
              <GenderCheckBox
                onCheckBoxChange={handleCheckBox}
                selectedGender={inputs.gender}
              />
              <div className="mt-4 ms-3 d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-primary rounded-pill px-4 py-2"
                  disabled={loading}
                >
                  {loading ? <Loader /> : "Sign Up"}
                </button>
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
