import React from 'react'

import "./avatar.css";

const Avatar = () => {
    return (
        <img
            src = {require('../../asset/mawan_foto.jpg')}
            className="avatar"
            alt="Avatar"
        />
    )
};

export default Avatar