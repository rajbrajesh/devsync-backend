import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/**
 * DashboardLayout
 * Combines Navbar + Sidebar + Main Content
 */

function DashboardLayout({ children }) {

  return (

    <div>

      {/* Top Navbar */}
      <Navbar />

      <div style={{ display: "flex",minHeight: "100vh" }}>

        {/* Sidebar on left */}
        <Sidebar />

        {/* Main content area */}
        <div style={{ padding: "40px", flex: 1 }}>

          {children}

        </div>

      </div>

    </div>

  );

}

export default DashboardLayout;