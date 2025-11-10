import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginPageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/userlogin.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email or phone number is required';
    } else if (
      !emailRegex.test(formData.email) &&
      !phoneRegex.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email or 10-digit phone number';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
    if (loginError) setLoginError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setLoginError('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const userData = {
        name: formData.email.includes('@')
          ? formData.email.split('@')[0]
          : formData.email,
        email: formData.email,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          formData.email
        )}&background=2563eb&color=fff`,
        userType: 'user'
      };
      login(userData);
      navigate('/');
    } catch (error) {
      setLoginError(
        'Login failed. Please check your credentials and try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = (provider) => {
    setLoginError(`${provider} authentication is not yet implemented`);
  };

  const handleSwitchToInfluencer = () => {
    navigate('/influencer-login');
  };

  return (
    <div className="login-page" style={loginPageStyle}>
      <div className="auth-card">
        <div className="auth-switch">
          <span>Switch to </span>
          <button
            type="button"
            onClick={handleSwitchToInfluencer}
            className="switch-link"
            tabIndex={0}
          >
            Influencer
          </button>
        </div>

        <h1 className="auth-title">Login</h1>

        {loginError && (
          <div className="error-message" role="alert">
            {loginError}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email / Phone Number</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Mudit@gmail.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <span id="email-error" className="field-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••••"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                disabled={isLoading}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <span id="password-error" className="field-error" role="alert">
                {errors.password}
              </span>
            )}
          </div>

          <div className="forgot-password-link">
            <button
              onClick={() => navigate('/forgot-password')}
              type="button"
              className="forgot-link"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-divider">
          <span>Or Continue With</span>
        </div>

        <div className="social-auth-buttons">
          <button
            className="social-auth-btn google-btn"
            onClick={() => handleSocialAuth('Google')}
            disabled={isLoading}
            aria-label="Sign in with Google"
          >
            Google
          </button>
          <button
            className="social-auth-btn facebook-btn"
            onClick={() => handleSocialAuth('Facebook')}
            disabled={isLoading}
            aria-label="Sign in with Facebook"
          >
            Facebook
          </button>
        </div>

        <p className="auth-footer">
          Don't have an account yet?{' '}
          <button
            onClick={() => navigate('/register')}
            type="button"
            className="register-link"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
