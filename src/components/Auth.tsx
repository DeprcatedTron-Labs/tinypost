import React from "react";

const Auth = () => {
  return (
    <div className="auth-container">
      <button className="auth-btn insta-auth">Login with Instagram</button>
      <button className="auth-btn google-auth">Connect to Google Photos</button>
    </div>
  );
};

export default Auth;
