import React, { useState } from "react";
import axios from "axios";

export default function Students({ students, user }) {
  const [id, setid] = useState("");
  const [role, setrole] = useState("student");
  const [subject, setsubject] = useState("");
  const [displayToggle, setdisplayToggle] = useState(
    "col-6 form-group display-none"
  );

  function displayObj(e) {
    e.preventDefault();
    // window.location = "/";
    if (role === "teacher" && subject === "") alert("Choose Teaching Subject!");
    else {
      setsubject("");
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
  }

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <div className="container">
      {user.role === "teacher" && user.subject === "english" ? (
        <section>
          <form onSubmit={displayObj}>
            <div className="container bg-gradient-secondary">
              <div className="row justify-content-center">
                <div className="alert alert-warning text-center my-4 col-11">
                  Use Student SATS number as 'User Id' for Entry below.
                </div>
                <div className="col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6">
                  <div className="row ">
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
                          else
                            setdisplayToggle("col-6 form-group display-none");
                        }}
                      >
                        <option value="student" defaultValue="student">
                          Student
                        </option>
                        <option value="teacher">Teacher</option>
                        <option value="head master">Head Master</option>
                        <option value="d group">D Group</option>
                        <option value="clerk">Clerk</option>
                        {/* <option value="drawing">Drawing</option> */}
                        {/* <option value="music">Music</option> */}
                        {/* <option value="drama">Drama</option> */}
                        <option value="fda">FDA</option>
                        {/* <option value="physical education">
                          Physical Education
                        </option> */}
                      </select>
                    </div>
                    <div className={displayToggle}>
                      <select
                        className="form-select"
                        onChange={(e) => setsubject(e.target.value)}
                        required
                      >
                        <option>Select Teaching Subject</option>
                        <option value="english">English</option>
                        <option value="kannada">Kannada</option>
                        <option value="hindi">Hindi</option>
                        <option value="science">Science</option>
                        <option value="maths">Mathematics</option>
                        <option value="social">Social Science</option>
                        <option value="social">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row justify-content-start mt-4">
                    <div className="col">
                      <button className="btn btn-primary mb-2" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      ) : (
        <></>
      )}
      {/* ==================Students=================== */}
      <div className="row p-4 flex-row justify-content-center">
        {students.map((student) => {
          return (
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-5">
              <div className="card text-light student-card">
                <div className="card-body text-center">
                  <img
                    className="avatar rounded-circle"
                    src={student.profileURL}
                    alt="User Not Registered"
                  />
                  <h4 className="card-title text-capitalize">{student.name}</h4>
                  <p className="card-subtitle mb-2 text-info font-weight-light">
                    Id : {student.id}
                  </p>
                  <p className="card-subtitle mb-2 text-info font-weight-light text-danger">
                    Role : {titleCase(student.role)}
                  </p>
                  <p className="card-text bg-dark">{student.email}</p>
                  {user.role !== "student" ? (
                    <>
                      <p>Click on the Number below to call</p>
                      <a
                        className="text-light btn-success  btn-sm"
                        href={`tel:${student.phone}`}
                      >
                        {`Phone : ${student.phone}`}
                      </a>
                      <div className="mt-2 text-warning">Address : </div>
                      <p>{`${student.address}`}</p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
