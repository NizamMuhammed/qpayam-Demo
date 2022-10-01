import React, { useState } from "react"
import "../styles/Register.css"

const Register = () => {
  const [stateValues, setStateValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Register",
    error: "",
    success: "",
  })

  const handleChange = (value) => (e) => {
    setStateValues({
      ...stateValues,
      [value]: e.target.value,
      error: "",
      success: "",
    })
  }

  return (
    <div className="mainContainer">
      <div className="backgroundContainer">
        <form className="formContainer">
          <h1 className="signupTitle">Signup</h1>
          <div className="inputMainContainer">
            <div className="inputContainer">
              <h3 className="inputText">Name</h3>
              <input
                placeholder="Enter your Name"
                className="inputField"
                type="text"
                name="name"
                onChange={handleChange("name")}
              ></input>
            </div>
            <div className="inputContainer">
              <h3 className="inputText">Email</h3>
              <input
                placeholder="Enter your Email"
                className="inputField"
                onChange={handleChange("email")}
              ></input>
            </div>
            <div className="inputContainer">
              <h3 className="inputText">Password</h3>
              <input
                placeholder="Enter your Password"
                className="inputField"
                onChange={handleChange("password")}
              ></input>
            </div>
          </div>
          <button type="submit" className="submitButton">
            {stateValues.buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
