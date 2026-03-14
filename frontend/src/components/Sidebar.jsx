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

      {/* Navigation links */}

      <p style={{cursor:"pointer"}}>Dashboard</p>

      <p style={{cursor:"pointer"}}>Tasks</p>

      <p style={{cursor:"pointer"}}>Analytics</p>

      <p style={{cursor:"pointer"}}>Settings</p>

    </div>

  );

}

export default Sidebar;