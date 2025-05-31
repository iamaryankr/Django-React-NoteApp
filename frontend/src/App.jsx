import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, NotFound, Register } from './pages/index'
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear();
  return <Navigate to = "/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = "/"
          element = {
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/logout" element = {<Logout />} />
        <Route path = "/register" element = {<RegisterAndLogout />} />
        <Route path = "*" element = {<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App