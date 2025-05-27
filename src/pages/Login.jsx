import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateLogin = (email, password) => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate a successful login
    if (email === "abc@gmail.com" && password === "abc123") {
      // Optionally store login status
      localStorage.setItem("loggedInUser", email);
      navigate("/support"); // redirect to Support page
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="login">
      
      <div className="log-container">
        <form onSubmit={handleSubmit}>
          <h3>Log in</h3>

          <div className="log-box">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="log-box">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="log-button">
            <button type="submit" className="log-buttun1">
              Log in
            </button>
          </div>

         
          {loginError && <p className="error">{loginError}</p>}

          <p className="not-register">
            If you don't have an account <a href="/signup">Sign up?</a>
          </p>
        </form>
      </div>
    </div>
  );
}