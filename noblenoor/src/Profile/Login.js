import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Send a POST request to the backend's login endpoint
            const response = await fetch('http://localhost:3000/login', { // Replace with your actual backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData) // Send email and password
            });

            const data = await response.json();

            if (response.ok) {
                // Backend sends the token in the response body
                const token = data.token;

                // Store the token in localStorage or sessionStorage
                localStorage.setItem('jwtToken', token);

                // Redirect based on role (optional)
                if (data.role === 'admin') {
                    navigate('/admin-dashboard');
                } else {
                    navigate('/'); // Redirect to home page after successful login
                }
            } else {
                // Display error message if login fails
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            // Handle network errors or other unexpected issues
            setError('An error occurred. Please try again later.');
        }
    };

    return (
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

                <button type="submit" className="submit-btn">Login</button>

                <p className="login-redirect">
                    Create new account <Link to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
