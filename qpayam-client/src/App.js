import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Register from "./pages/Register"

/* react-router-dom is used for Navigation
 * Version number is important as it may cause errors while navigating
 */

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Appcontainer">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
