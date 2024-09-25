import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ButtonNav from "../button/buttonNav";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import ApartmentSharpIcon from '@mui/icons-material/ApartmentSharp';
import "./navbar.css";
import { MyContext } from "../../MyContext";


const VNavbar = () => {
  const {isCollapsed, setIsCollapsed } = useContext(MyContext);


  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <span onClick={toggleSidebar} className="sidebar-icon">
          <span className="icon-placeholder">
            <img
              src="/logo1.png"
              alt="User Avatar"
              className="logo-image"
              title={isCollapsed ? "open" : "close"}
            />
          </span>
        </span>
        {!isCollapsed && <span className="sidebar-title">Nestle</span>}
      </div>

      <div className="sidebar-menu">
        <div className="menu-section">
          <ButtonNav
            to="/dashboard"
            icon={<SpaceDashboardIcon style={{ fontSize: "22px" }} />}
            label="Dashboard"
            collapsed={isCollapsed}
            active={location.pathname === "/dashboard"}
          />

          <ButtonNav
            to="/shop"
            icon={<ShoppingCartIcon style={{ fontSize: "22px" }} />}
            label="Shop"
            collapsed={isCollapsed}
            active={location.pathname === "/shop"}
          />
          
        </div>
      </div>

      <Tooltip arrow placement="top">
        <div className={`sidebar-footer ${isCollapsed ? "collapsed" : ""}`}>
          <div className="loguser" onClick={toggleSidebar}><img src="/nestle.png" alt="Nestle" className="logoimg"/></div>
          <div className={`user-avatar ${isCollapsed ? "collapsed" : ""}`} onClick={toggleSidebar}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
              alt="User Avatar"
              className="avatar-image"
            />
          </div>
          {!isCollapsed && <span className="user-name">SURESH KANNAN R V</span>}
          {!isCollapsed && (
            <span className="logout-icon">
              <LogoutIcon />
            </span>
          )}
        </div>
      </Tooltip>
    </div>
  );
};

export default VNavbar;
