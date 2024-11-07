import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [id, setid] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [role, setrole] = useState("student");
  const [subject, setsubject] = useState("");
  const [displayToggle, setdisplayToggle] = useState(
    "col-6 form-group display-none"
  );

  function displayObj(e) {
    e.preventDefault();
    // window.location = "/";
    axios
      .post("/api/enter", {
        id: id,
        role: role,
        subject: subject,
      })
      .then(function (response) {
        alert("inserted");
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  return (
    <div className="register">
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
                    <h1>Insert Student</h1>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col  mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Id"
                      onChange={(e) => setid(Number(e.target.value))}
                      required
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-4">
                  <div className="col-6 form-group">
                    <select
                      className="form-select"
                      onChange={(e) => {
                        setrole(e.target.value);
                        if (e.target.value === "teacher")
                          setdisplayToggle("col-6 form-group");
                        else setdisplayToggle("col-6 form-group display-none");
                      }}
                    >
                      <option value="student" defaultValue="student">
                        Student
                      </option>
                      <option value="teacher">Teacher</option>
                    </select>
                  </div>
                  <div className={displayToggle}>
                    <select
                      className="form-select"
                      onChange={(e) => setsubject(e.target.value)}
                    >
                      <option>Select Teaching Subject</option>
                      <option value="english">English</option>
                      <option value="kannada">Kannada</option>
                      <option value="hindi">Hindi</option>
                      <option value="science">Science</option>
                      <option value="maths">Mathematics</option>
                      <option value="social">Social Science</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-start mt-4">
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
    </div>
  );
}
