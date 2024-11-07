import React, { useState } from "react";
import axios from "axios";
import Compressor from "compressorjs";
import { Redirect } from "react-router-dom";

export default function Register() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [address, setaddress] = useState("");
  const [profile, setprofile] = useState("");
  const [routName, setRoutName] = useState("");
  //   const [displayToggle, setdisplayToggle] = useState(
  //     "col-6 form-group display-none"
  //   );

  function displayObj(e) {
    e.preventDefault();
    const fdata = new FormData();
    fdata.append("id", id);
    fdata.append("name", name);
    fdata.append("phone", phone);
    fdata.append("dob", dob);
    fdata.append("email", email);
    fdata.append("password", password1);
    fdata.append("address", address);
    fdata.append("profile", profile);
    // data.append("role", role);
    // data.append("subject", subject);

    axios
      .post("/api/register", fdata)
      .then(function (response) {
        alert(response.data);
        // console.log(response);
        setRoutName(true);
      })
      .catch(function (error) {
        console.log(fdata);
        // console.log(error.response.data);
        alert(error.response.data);
      });
  }

  if (routName) {
    return <Redirect to="/login" />;
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
    <div className="register">
      <section>
        <form
          onSubmit={(e) => {
            if (password1 === password2) displayObj(e);
            else alert("Both passwords not matching. Try again");
          }}
        >
          <div className="container bg-gradient-secondary">
            <div className="row justify-content-center">
              <div className="alert alert-warning text-center my-4 col-11">
                Use your SATS number as 'User Id' for Registration.
              </div>
              <div className="col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6">
                <div className="row">
                  <div className="col text-center">
                    <h1>Register</h1>
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
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      onChange={(e) => setname(titleCase(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col mt-4">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      onChange={(e) => setphone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col mt-4">
                    <input
                      type="text"
                      name="dob"
                      className="form-control"
                      placeholder="Date of Birth"
                      onFocus={(e) => {
                        e.target.type = "date";
                        // console.log(e);
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          e.target.type = "text";
                        }
                      }}
                      onChange={(e) => setdob(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-4">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row align-items-center mt-4">
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setpassword1(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={(e) => setpassword2(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-4">
                  <div className="col">
                    <textarea
                      type="text"
                      className="form-control textarea"
                      placeholder="Residential Address"
                      rows="4"
                      onChange={(e) => setaddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row align-items-center mt-4">
                  <div className="col">
                    <label className="mb-1">
                      Profile Picture ( size limit : 4 mb )
                    </label>
                    <input
                      type="file"
                      className="form-control textarea"
                      accept="image/png, image/jpg, image/jpeg"
                      required
                      onChange={(e) => {
                        if (e.target.files[0].size > 1048576 * 4) {
                          alert("Image size exceeded");
                          e.target.value = "";
                        } else {
                          //   setprofile(e.target.files[0]);
                          new Compressor(e.target.files[0], {
                            quality: 0.6,
                            success: (compressedResult) => {
                              const myFile = new File(
                                [compressedResult],
                                `${id}.jpeg`,
                                {
                                  type: compressedResult.type,
                                }
                              );

                              setprofile(myFile);
                              console.log(myFile);

                              //Display Image
                              var imgElement =
                                document.getElementById("preview");
                              imgElement.src = URL.createObjectURL(myFile);
                              imgElement.className = "mt-3";
                            },
                          });
                        }
                      }}
                    />
                    <img
                      id="preview"
                      src="#"
                      className="display-none"
                      style={{
                        height: "20vw",
                        width: "17vw",
                      }}
                    />
                  </div>
                </div>
                {/* <div className="row align-items-center mt-4">
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
                </div> */}
                <div className="row justify-content-start mt-4">
                  <div className="col">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          required
                        />
                        I Accept all the Information provided by me is Genuine.
                      </label>
                    </div>

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
