import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const API_URL = 'http://localhost:5000';

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    const { token, role } = response.data;
    return { token, role };
  } catch (error) {
    throw error.response.data;
  }
};

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const { token, role } = await login(formData);
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('isLoggedIn', 'true');
            window.dispatchEvent(new Event('loginStatusChanged'));

            // Redirect based on role
            if (role === 'admin') {
                navigate('/adminPage');
            } else {
                navigate('/account');
            }
        } catch (error) {
            setError(error.message || 'Password or email is incorrect');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-form-container">
            <div className="form-container">
                <h2>Get Started Now</h2>
                <p>Enter your credentials to access your account</p>

                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? 'Logging in... logging in...' : 'Login'}
                    </button>

                    <p className="login-redirect">
                        Create new account <Link to="/signup">Signup</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;