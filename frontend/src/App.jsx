import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./pages/TaskList";

// Root component of DevSync frontend
// This component loads the main UI of our application

function App() {

  return (
    <>
    <div style={{padding:"40px"}}>

      {/* Application Title */}
      <h1>DevSync Dashboard</h1>

      {/* Short description */}
      <p>Track coding problems across multiple platforms</p>

    </div>
    <TaskList/>
    </>
  )

}

export default App
