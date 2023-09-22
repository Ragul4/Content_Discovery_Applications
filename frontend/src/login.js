import React, { useState } from 'react';
import './page.css';
import { Link } from 'react-router-dom';
import View from './view';
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log('Attempting to login with:', email, password);
      // Add logic to handle login
    } else {
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
        return; // Prevent form submission if passwords don't match
      } else {
        setPasswordsMatch(true);
        console.log('Attempting to signup with:', email, password);
        // Add logic to handle signup
      }
    }
  };

  return (
    <div className="container">
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div id="hh1">
        {isLogin ? <h2>Login</h2> : <h2>Signup</h2>}
      </div>
      <br /><br />
      <form className="form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            className="input"
            type="text"
            placeholder="Name"
            required
          />
        )}
        <br /><br />
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        {!isLogin && (
          <>
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {!passwordsMatch && (
              <p className="error-message">Passwords do not match.</p>
            )}
            <br /><br />
          </>
        )}
        <button className="button" type="submit">
          {isLogin ? <Link to="/View">Login</Link> : 'Signup'}
        </button>
      </form>
      <p className="toggle-view" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default AuthPage;
