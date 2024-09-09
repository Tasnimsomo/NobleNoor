import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Here you would typically handle the registration logic
        // For now, we'll just log the form data and navigate to login
        console.log('Registration data:', formData);
        navigate('/login'); // Redirect to login page after form submission
    };

    return (
        <div className="form-container">
            <h2>Create New Account</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="email" name="email" placeholder="Your email" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="password" name="password" placeholder="Your password" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} required />
                </div>
                <div className="forgot-password">
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <button type="submit" className="submit-btn">Create Account</button>
            </form>
            <p className="login-redirect">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;