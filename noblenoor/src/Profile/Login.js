import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setError("");
    if (input.email !== "" && input.password !== "") {
      try {
        await auth.loginAction(input);
        navigate("/"); // or wherever you want to redirect after login
      } catch (err) {
        setError("Login failed. Please check your credentials.");
      }
    } else {
      setError("Please provide both email and password.");
    }
  };

  return (
    <div className="login-form-container">
      <div className="form-container">
        <h2>Login</h2>
        <p>Welcome back! Please login to your account.</p>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmitEvent}>
          <div className="input-group">
            <input
              type="email"
              id="user-email"
              name="email"
              placeholder="Email"
              aria-describedby="user-email"
              aria-invalid="false"
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              aria-describedby="user-password"
              aria-invalid="false"
              onChange={handleInput}
            />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button className="submit-btn" type="submit">Login</button>
        </form>
        <div className="login-redirect">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;