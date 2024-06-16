import React, { useState } from 'react';
import './App.css';
import './Login.css';

function App() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginCount, setLoginCount] = useState(0);

  const eventHandler = () => {
    setLoginCount(prevCount => {
      const newCount = prevCount + 1;
      alert(`There are ${newCount} login(s)`);
      return newCount;
    });

    // Reset all form fields
    setUsername("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setDob("");
    setAddress("");
    setRememberMe(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>T:ME TO LOG :N</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>

          <div className="form-group">
            <input type="checkbox" id="remember-me" name="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="button" onClick={eventHandler}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
