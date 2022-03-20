import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Beasky Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <i className="bi bi-bell"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i className="bi bi-globe"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i className="bi bi-gear"></i>
          </div>
          <img
            src="https://static.generated.photos/vue-static/face-generator/landing/wall/23.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar