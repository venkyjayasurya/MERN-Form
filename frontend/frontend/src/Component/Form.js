import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/", {
        name: name,
        password: password,
      })
      .then((res) => alert("Success!"))
      .catch((err) => console.log(err));
    console.log(name, password);
  }

  return (
    <div className="react-form">
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label>Name</label>
          <input
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-div">
          <label>Password</label>
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-div">
          <input type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
