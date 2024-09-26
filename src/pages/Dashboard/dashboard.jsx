import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import "./dashboard.css";

function Dashboard() {
  const [username, setusername] = useState("Jone");
  return (
    <>
      <div className="dashboard" style={{ padding: "20px 20px" }}>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <h1>Welcome, {username}</h1>
          <div style={{ display: "flex" }}>
            <TextField
              placeholder="Search ..."
              onSearchClick={() => console.log("Finding directions...")}
              size="small"
              sx={{
                width: "200px",
                margin: "auto 0",
                border: "1px solid #ccc",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "60px",
                marginTop: "15px",
                border: "2px solid #ccc",
                borderRadius: "10px",
                marginLeft: "20px",
              }}
            >
              <div className="user-image">
                <img
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727222400&semt=ais_hybrid"
                  alt="User"
                  style={{ width: "100%", height: "100%", objectFit: "cover" ,borderRadius:"50%"}}
                />
              </div>
              <div className="user-details">
                <p className="user-name">{username}</p>
                <p className="user-id">CUSTOMER #008177</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-main"><div>hello this is the dashboard page</div></div>
      </div>
    </>
  );
}

export default Dashboard;
