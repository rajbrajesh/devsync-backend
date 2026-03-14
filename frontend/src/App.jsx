import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./pages/TaskList";
import DashboardLayout from "./components/DashboardLayout";


// Root component of DevSync frontend
// This component loads the main UI of our application

function App() {

  return (
    <DashboardLayout>

      {/* Task page inside dashboard layout */}
      <TaskList />

    </DashboardLayout>
  )

}

export default App
