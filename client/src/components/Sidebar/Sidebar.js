import React from "react";
import "./Sidebar.css";

const Sidebar = props => (
  <div className="sidebar">
    <div className="welcome-space">
      <div className="welcome-message">
        <h1>Welcome,</h1>
        <h2>{props.user}</h2>
      </div>
    </div>
    <div className="menu-space">
      <a className="sidebar-link">
        <span className="icon has-text-success">
          <i class="fas fa-building" />
        </span> TARGET INDUSTRY
      </a>
      <a className="sidebar-link">
        <span className="icon has-text-success">
          <i className="fas fa-users" />
        </span> TARGET LOCATION
      </a>
      <a className="sidebar-link">
        <span className="icon has-text-success">
          <i className="fas fa-users" />
        </span> TARGET DEMOGRAPHICS
      </a>
      <a className="sidebar-link">
        <span className="icon has-text-success">
          <i className="fas fa-users" />
        </span> TRAFFIC OUTLOOK
      </a>
      <a className="sidebar-link">
        <span className="icon has-text-success">
          <i className="fas fa-users" />
        </span> COMPETITION HEATMAP
      </a>
      <a className="sidebar-link">
        <span className="icon has-text-success">
          <i className="fas fa-users" />
        </span> LOGOUT
      </a>
    </div>
  </div>
);

export default Sidebar;
