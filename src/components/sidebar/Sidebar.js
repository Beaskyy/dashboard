import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <i className="bi bi-house sidebarIcon"></i> Home
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-graph-up-arrow sidebarIcon"></i> Analytics
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-graph-up-arrow sidebarIcon"></i> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to='/users' className='link'>
              <li className="sidebarListItem">
                <i className="bi bi-person sidebarIcon"></i> Users
              </li>
            </Link>
            <Link to="/products" className='link'>
              <li className="sidebarListItem">
                <i className="bi bi-shop sidebarIcon"></i> Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <i className="bi bi-currency-dollar sidebarIcon"></i> Transactions
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-bar-chart sidebarIcon"></i> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="bi bi-envelope sidebarIcon"></i> Mail
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-chat-left-text sidebarIcon"></i> Feedback
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-chat-left sidebarIcon"></i> Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <i className="bi bi-briefcase sidebarIcon"></i> Manage
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-graph-up-arrow sidebarIcon"></i> Analytics
            </li>
            <li className="sidebarListItem">
              <i className="bi bi-exclamation-circle sidebarIcon"></i> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar