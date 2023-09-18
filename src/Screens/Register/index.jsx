import React from "react";
import "../../Styles/Register.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container">
      <div className="title">
      <img src={logo} alt="Logo" className="logo" />
        <p className="welcome">Welcome Back!</p>
        <p className="regyracnt">Register for your account</p>
      </div>

      <form className="form">
        <div className="row">
          <div className="col">
            <div className="input-group">
              <p className="p" htmlFor="firstName">Enter Username:</p>
              <input type="text" id="firstName" name="firstName" />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="lastName">Enter Your E-mail:</p>
              <input type="text" id="lastName" name="lastName" />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="email">Enter Your Password:</p>
              <input type="email" id="email" name="email" />
            </div>
          </div>

          <div className="col">
            <div className="input-group">
              <p className="p" htmlFor="password">Get Number:</p>
              <input  id="password" name="password" />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="confirmPassword">Company Name:</p>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="confirmPassword">Company Contact no:</p>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <p className="p" htmlFor="country">Role:</p>
              <select id="country" name="country">
                <option value="manu">Manufracturer</option>
                <option value="asse">Assembler</option>
                <option value="reta">Retailer</option>
                <option value="whole">Wholesaler</option>
                <option value="raw ">Raw material supplier</option>

              </select>
            </div>
          </div>
        </div>
        <div class='btn'>
        <button className="buttons" type="submit">Register</button> 
        <p className="alredy">Already have an Account? <Link to='/'>  Login Now!</Link></p>
        </div>
        
      </form>
      <hr className="line" />
      <p className="artquire">2023 ArtQuire. All Rights Reserved. Designed,Build & Maintained by Sid*</p>

    </div>
  );
};

export default Register;
