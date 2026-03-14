import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./pages/TaskList";
import DashboardLayout from "./components/DashboardLayout";

import DashboardPage from "./pages/DashboardPage"
import TasksPage from "./pages/TasksPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"


// Root component of DevSync frontend
// This component loads the main UI of our application

function App() {

  return (
    <BrowserRouter>

      <DashboardLayout>

        <Routes>

          <Route path="/dashboard" element={<DashboardPage/>}/>

          <Route path="/tasks" element={<TasksPage/>}/>

          <Route path="/analytics" element={<AnalyticsPage/>}/>

          <Route path="/settings" element={<SettingsPage/>}/>

        </Routes>

      </DashboardLayout>

    </BrowserRouter>
  )

}

export default App
