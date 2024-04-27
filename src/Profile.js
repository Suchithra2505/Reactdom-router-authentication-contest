// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const history = useNavigate();

//   useEffect(() => {
//     // Check if user is authenticated
//     const accessToken = localStorage.getItem('accessToken');
//     if (!accessToken) {
//     history('/signup');
//     }
//   }, [history]);

//   const handleSignout = () => {
//     localStorage.removeItem('accessToken');
//     history("/signup");
//   };

//   return (
//     <div className="profile-container">
//       <h2>Profile</h2>
//       <div className="user-details">
//         {/* Display user details here */}
//       </div>
//       <button type="button" onClick={handleSignout}>Signout</button>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      history('/signup');
    } else {
      // Retrieve user details from local storage
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (userDetails) {
        setUser(userDetails);
      }
    }
  }, [history]);

  const handleSignout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userDetails');
    history('/signup');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {user && (
        <div className="user-details">
          <p>Full Name: {user.fullname}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
      <button type="button" onClick={handleSignout}>Logout</button>
    </div>
  );
};

export default Profile;
