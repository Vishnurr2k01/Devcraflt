import React, { useState } from "react";
import axios from "axios";
import "./login.css"

const Login = () => {
    const [email2, setEmail] = useState("");
    const [password2, setPassword] = useState("");

     const handleEmailChange = (e) => {
       setEmail(e.target.value);
     };

     const handlePasswordChange = (e) => {
       setPassword(e.target.value);
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       axios
         .get("https://devcraft-api.onrender.com/api/v1/auth/", {
           body: {
             email: email2,
             password: password2,
           },
         })
         .then((response) => {
           // Handle response from the server
           console.log(response.data);
         })
         .catch((error) => {
           // Handle error from the server
           console.log(error.response.data);
           console.log(email2, password2);
         });
     };
  return (
    <div className="container2">
      <div class="login-box">
        <p>Login</p>
        <form>
          {/* <div class="user-box">
            <input
              required=""
              name=""
              type="text"
            //   onChange={handleInputChange}
              // value={formData.name}
            />
            <label>Name</label>
          </div> */}
          <div class="user-box">
            <input
              required=""
              name=""
              type="text"
              // value={formData.email}
            //   onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          {/* <div class="user-box">
            <input
              required=""
              name=""
              type="text"
              // value={formData.phone}
            //   onChange={handleInputChange}
            />
            <label>Phone Number</label>
          </div> */}
          <div class="user-box">
            <input
              required=""
              name=""
              type="password"
              // value={formData.password}
            //   onChange={handleInputChange}
            />
            <label>Password</label>
          </div>
          <a href="/dashboard">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/signup" class="a2">
            Sign Up!
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login