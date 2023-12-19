import React from 'react';
import '../assets/style/loginForm.css';

const Logpage = () => {
  return (
    <div className="login-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <form className="login-form" method='POST'>
        <h1 style={{fontSize:20, fontFamily:'Figtree, sans-serif'}}>Login</h1>
        <div className="form-group">
          <label htmlFor="email" style={{fontFamily:'Figtree, sans-serif'}}>Mail ID</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{fontFamily:'Figtree, sans-serif'}}>Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" style={{
            padding: 10,
            fontSize: 16,
            cursor: 'pointer',
            backgroundColor: '#5393cf',
            color: '#f3eeee',
            borderRadius: 10,
            fontFamily: 'Figtree, sans-serif',
        }}
        >
            Submit
        </button>

      </form>
    </div>
  );
};

export default Logpage;
