import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Login({ fun, setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [routName, setRoutName] = useState("");

  function displayObj(e) {
    e.preventDefault();
    // window.location = "/";
    axios
      .post("/api/login", {
        id: id,
        password: password,
      })
      .then(function (response) {
        // console.log(response.data);
        fun(true);
        setUser(response.data);
        // alert("Login Successful");
        console.log(response.data);
        setRoutName(true);
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  }
  if (routName) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <section>
        <form onSubmit={displayObj}>
          <div className="container bg-gradient-secondary">
            <div className="row justify-content-center">
              <div className="alert alert-warning text-center my-4 col-11">
                Use your SATS number as 'User Id' for Registration.
              </div>
              <div className="col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6">
                <div className="row">
                  <div className="col text-center">
                    <h1>Login</h1>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col  mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Id"
                      onChange={(e) => setId(Number(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col  mt-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-start mt-1">
                  <div className="col">
                    <button className="btn btn-primary mt-4" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
