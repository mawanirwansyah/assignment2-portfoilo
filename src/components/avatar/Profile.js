import React from 'react'

import "./avatar.css";

const Profile = () => {
    return (
        <img
            src = {require('../../asset/logo-s.png')}
            className="profile" alt="Profile"
        />
    )
};

export default Profile