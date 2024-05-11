// client/pages/UserProfilePage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the server
    axios.get('/api/user/profile')
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile && (
        <div>
          <p>Username: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          <p>Documents: {userProfile.documents.length}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
