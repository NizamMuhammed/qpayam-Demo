import "../styles/Header.css"
import React from "react"
import { Link } from "react-router-dom"

/* Link to is used to navigate to specific pages */

const Header = () => {
  return (
    <div className="header">
      <div className="home">
        <Link to="/" className="linkStyle">
          <div>Qpayam</div>
        </Link>
      </div>
      <div className="login">
        <Link to="/login" className="linkStyle">
          Login
        </Link>
      </div>
      <div className="register">
        <Link to="/register" className="linkStyle">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Header
