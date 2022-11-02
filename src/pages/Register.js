import { useState } from "react";
import { Navigate } from "react-router-dom";
import React from "react";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lasttname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [goToLogin, setGoToLogin] = React.useState(false);
  if (goToLogin) {
    return <Navigate to="/Login" />;
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Enter First Name"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br></br>
      <input
        type="tel"
        placeholder="Enter Phone Number"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br></br>
      <button onClick={() => setGoToLogin(true)}>Register</button>
    </form>
  );
}
export default Register;
