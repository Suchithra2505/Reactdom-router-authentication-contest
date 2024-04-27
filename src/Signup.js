// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const history = useNavigate();

//   useEffect(() => {
//     // Check if user is authenticated
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       history("/profile");
//     }
//   }, [history]);

//   const handleSignup = () => {
//     if (!fullname || !email || !password || !confirmPassword) {
//       setError('All fields are mandatory');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Mock signup logic
//     const accessToken = generateAccessToken();
//     localStorage.setItem('accessToken', accessToken);
//     setSuccess('Signup successful. Redirecting to profile...');
//     setTimeout(() => {
//       history("/profile");
//     }, 2000);
//   };

//   const generateAccessToken = () => {
//     // Generate random access token
//     return Math.random().toString(36).substring(2, 18);
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       {error && <div className="error">{error}</div>}
//       {success && <div className="success">{success}</div>}
//       <form>
//         <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//         <button type="button" onClick={handleSignup}>Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Navbar from './Navbar';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const history = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      history('/profile');
    }
  }, [history]);

  const handleSignup = () => {
    if (!fullname || !email || !password || !confirmPassword) {
        setError(<span style={{ color: 'red' }}>All fields are mandatory</span>);
      return;
    }

    if (password !== confirmPassword) {
        setError(<span style={{ color: 'red' }}>Passwords do not match</span>);
      return;
    }

    // Mock signup logic
    const accessToken = generateAccessToken();
    const userDetails = { fullname, email,password }; 
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userDetails', JSON.stringify(userDetails)); 
    setSuccess('Signup successful. Redirecting to profile...');
    setTimeout(() => {
      history('/profile');
    }, 2000);
  };

  const generateAccessToken = () => {
    // Generate random access token
    return Math.random().toString(36).substring(2, 18);
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form>
      <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
  <hr className="line" />
  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  <hr className="line" />
  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  <hr className="line" />
  <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  <hr className="line" /><br></br>
  <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
