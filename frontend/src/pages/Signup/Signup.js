import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import "./signup.css"

const Signup = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post("https://devcraft-api.onrender.com/api/v1/auth/", formData)
        .then((response) => {
          console.log(response.data);
          navigate('/login', {replace: true});
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

  return (
    // <div className='container'>
    //     <div className='left'>
    //         <h2>Start your journey with us.</h2>
    //         <p>Discover the best ways to track your finances.</p>
    //     </div>
    //     <div className='right'>
    //     <h1>Sign up</h1>
    //     <p>Have an account? <Link to="/login">Login</Link></p>
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="name">Name:</label>
    //         <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleInputChange}
    //         />

    //         <label htmlFor="email">Email:</label>
    //         <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //         />

    //         <label htmlFor="phone">Phone:</label>
    //         <input
    //         type="tel"
    //         id="phone"
    //         name="phone"
    //         value={formData.phone}
    //         onChange={handleInputChange}
    //         />

    //         <label htmlFor="password">Password:</label>
    //         <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleInputChange}
    //         />

    //         <button type="submit" onClick={handleSubmit}>Sign up</button>
    //     </form>
    // </div>
    <div className='container'>
        <div class="login-box">
        <p>Sign Up</p>
        <form>
            <div class="user-box">
            <input
                required=""
                name=""
                type="text"
                onChange={handleInputChange}
                // value={formData.name}
            />
            <label>Name</label>
            </div>
            <div class="user-box">
            <input
                required=""
                name=""
                type="text"
                // value={formData.email}
                onChange={handleInputChange}
            />
            <label>Email</label>
            </div>
            <div class="user-box">
            <input
                required=""
                name=""
                type="text"
                // value={formData.phone}
                onChange={handleInputChange}
            />
            <label>Phone Number</label>
            </div>
            <div class="user-box">
            <input
                required=""
                name=""
                type="password"
                // value={formData.password}
                onChange={handleInputChange}
            />
            <label>Password</label>
            </div>
            <a href="/login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </a>
        </form>
        <p>
            Already have an account?{" "}
            <a href="/login" class="a2">
            Login!
            </a>
        </p>
        </div>
    </div>
    // </div>
  );
}

export default Signup