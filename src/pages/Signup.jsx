import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = validateSignup(fname, lname, email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
    axios
      .post("http://localhost:3001/register", { fname, lname, email, password })
      .then((result) => {
        console.log(result);

       
        alert("You registered successfully!");
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setErrors({}); 

       
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h3>Sign up</h3>

          {successMessage && (
            <p className="success">{successMessage}</p> 
          )}

          <div className="signup-box">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {errors.fname && <p className="error">{errors.fname}</p>}
          </div>

          <div className="signup-box">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            {errors.lname && <p className="error">{errors.lname}</p>}
          </div>

          <div className="signup-box">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="signup-box">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="signup-button">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="signup-text">
            Already have an account <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}