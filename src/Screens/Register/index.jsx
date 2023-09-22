import React, { useState } from "react";
import "../../Styles/Register.css";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "../../utils/firebase";
import { addDoc, collection } from "@firebase/firestore";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("Producer");
  const [companyName, setCompanyName] = useState("");
  const [companyNo, setCompanyNo] = useState("");
  const navigate = useNavigate();

  const registerAcc = async () => {
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        const user = userDetails.user;
        console.log(user);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(errCode, errMsg);
      })
      .then(async () => {
        try {
          const data = await addDoc(collection(db, "UsersData"), {
            username: userName,
            email: email,
            number: number,
            role: role,
            company_name: companyName,
            company_no: companyNo,
          });
          console.log("Data written to", data.id);
          navigate("/vendorNav")
        } catch (e) {
          console.log("Error", e);
        }
      })
  };

  return (
    <div className="container">
      <div className="title">
        <img src={logo} alt="Logo" className="logo" />
        <p className="welcome">Welcome Back!</p>
        <p className="regyracnt">Register for your account</p>
      </div>

        <div className="row">
          <div className="col">
            <div className="input-group">
              <p className="p" htmlFor="firstName">
                Enter Username:
              </p>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userName}
                onChange={(text) => setUserName(text.target.value)}
              />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="lastName">
                Enter Your E-mail:
              </p>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="email">
                Enter Your Password:
              </p>
              <input
                type="password"
                id="email"
                name="email"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </div>
          </div>

          <div className="col">
            <div className="input-group">
              <p className="p" htmlFor="password">
                Gst Number:
              </p>
              <input
                id="password"
                name="password"
                value={number}
                onChange={(text) => setNumber(text.target.value)}
              />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="confirmPassword">
                Company Name:
              </p>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                value={companyName}
                onChange={(text) => setCompanyName(text.target.value)}
              />
            </div>

            <div className="input-group">
              <p className="p" htmlFor="confirmPassword">
                Company Contact no:
              </p>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                value={companyNo}
                onChange={(text) => setCompanyNo(text.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <p className="p" htmlFor="country">
                Role:
              </p>
              <select
                id="country"
                name="country"
                value={role}
                onChange={(text) => setRole(text.target.value)}
              >
                <option value="producer">Producer</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="supplier">Supplier</option>
                <option value="financier">Financier</option>
                <option value="logistics ">Logistics</option>
                <option value="vendor ">Vendor</option>
              </select>
            </div>
          </div>
        </div>
        <div class="btn">
          <button className="buttons" onClick={registerAcc}>
            Register
          </button>
          <p className="alredy">
            Already have an Account? <Link to="/"> Login Now!</Link>
          </p>
        </div>
    </div>
  );
};

export default Register;
