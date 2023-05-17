import React from 'react';
import './SignInLayout.css';

const SignInLayout = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">S'authentifier</button>
        </form>
      </div>
    </div>
  );
};

export default SignInLayout;
