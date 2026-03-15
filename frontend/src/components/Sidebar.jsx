import { NavLink } from "react-router-dom"

/*
 Sidebar Navigation Component
 Used to navigate between pages
 Also highlights active page
*/

function Sidebar() {

  return (

    <div
      style={{
        width: "220px",
        backgroundColor: "#e2e8f0",
        padding: "20px",
        height: "100vh",
        color: "#1e293b"
      }}
    >

      {/* Sidebar title */}
      <h3>Menu</h3>

      {/* Dashboard navigation */}
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          display: "block",
          marginBottom: "10px",
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black"
        })}
      >
        Dashboard
      </NavLink>

      {/* Tasks navigation */}
      <NavLink
        to="/tasks"
        style={({ isActive }) => ({
          display: "block",
          marginBottom: "10px",
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black"
        })}
      >
        Tasks
      </NavLink>

      {/* Analytics navigation */}
      <NavLink
        to="/analytics"
        style={({ isActive }) => ({
          display: "block",
          marginBottom: "10px",
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black"
        })}
      >
        Analytics
      </NavLink>

      {/* Settings navigation */}
      <NavLink
        to="/settings"
        style={({ isActive }) => ({
          display: "block",
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black"
        })}
      >
        Settings
      </NavLink>

    </div>

  )

}

export default Sidebar