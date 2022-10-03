import React, { useState } from "react"
import "../styles/Register.css"
import axios from "axios"

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

  const handleSubmit = (e) => {
    e.preventDefault() //prevent page reload
    axios
      .post(`http://localhost:8000/api/register`, {
        name: stateValues.name,
        email: stateValues.email,
        password: stateValues.password,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  return (
    <div className="mainContainer">
      <div className="backgroundContainer">
        <form className="formContainer" onSubmit={handleSubmit}>
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
