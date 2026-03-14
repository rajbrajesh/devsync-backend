import { Link } from "react-router-dom"


/**
 * Sidebar Component
 * Left navigation menu for dashboard
 */

function Sidebar() {

  return (

    <div
      style={{
        width: "200px",
        backgroundColor: "#f1f5f9",
        padding: "20px",
        height: "100vh",
        color: "#1e293b"
      }}
    >
      {/* Sidebar title */}
      <h3>Menu</h3>

      {/* Navigation links */}

      {/* Dashboard link */}
      <Link to="/dashboard" style={{display:"block", marginBottom:"10px"}}>
        Dashboard
      </Link>

      {/* Tasks link */}
      <Link to="/tasks" style={{display:"block", marginBottom:"10px"}}>
        Tasks
      </Link>

      {/* Analytics link */}
      <Link to="/analytics" style={{display:"block", marginBottom:"10px"}}>
        Analytics
      </Link>

      {/* Settings link */}
      <Link to="/settings" style={{display:"block"}}>
        Settings
      </Link>

    </div>

  );

}

export default Sidebar;