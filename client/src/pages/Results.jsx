import React, { useState, useEffect } from "react";
import ResultRow from "../Components/ResultRow";
import axios from "axios";

export default function Results({ students, user }) {
  const [subject, setSubject] = useState("");
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [testDetails, setTestDetails] = useState(null);
  const [allTests, setAllTests] = useState([]);
  const [tests, setTests] = useState([]);
  const [a, setA] = useState(false);
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    if (!a)
      axios
        .get("/api/tests")
        .then((response) => {
          //   console.log("Tests Got:", response.data);
          setAllTests(response.data);
          setA(true);
          if (subject) {
            var tempTests = response.data.filter((t) => t.subject === subject);
            setTests(tempTests);
          }
        })
        .catch((err) => {
          //   console.log("get Tests:", err.response.data);
        });
  }, [a]);

  const createTest = () => {
    if (subject) {
      axios
        .post("/api/test", testDetails)
        .then((response) => {
          setA(false);
          //   console.log("Tests Post :", response.data);
          setEdit(false);
          setAdd(false);
          //   console.log(allTests);
          setTestDetails(null);
        })
        .catch((err) => {
          //   console.log("Tests Post err :", err.response.data);
          alert("Server Error Please Reload the Page and try again.");
        });
    } else alert("Please Select Subject Above");
  };

  const deleteTest = () => {
    // console.log("_id:", testDetails._id);
    axios
      .delete(`/api/test/${testDetails._id}`)
      .then((response) => {
        // console.log("Tests Delete :", response.data);
        var tempTests = tests.filter((m) => m._id != testDetails._id);
        setTests(tempTests);
        var tempAllTests = allTests.filter((t) => t._id != testDetails._id);
        setAllTests(tempAllTests);
        setA(true);
      })
      .catch((err) => {
        // console.log("Tests Delete err :", err.response.data);
        alert("Server Error Please Reload the Page and try again.");
      });
  };

  const saveEditTest = () => {
    // console.log("_id:", testDetails._id);
    axios
      .put(`/api/test/${testDetails._id}`, testDetails)
      .then((response) => {
        // console.log("Tests Updated :", response.data);
        var tempTests = tests.filter((m) => m._id != testDetails._id);
        tempTests.push(testDetails);
        setTests(tempTests);
        // console.log(allTests);
        setA(false);
      })
      .catch((err) => {
        // console.log("Tests Updated err :", err.response.data);
        alert("Server Error Please Reload the Page and try again.");
      });
  };

  const onInputChange = (id, value) => {
    var temp = testDetails;
    var marks = temp.marks.filter((m) => m.id != id);
    marks.push({ id: id, score: parseInt(value) });
    temp.marks = marks;
    setTestDetails(temp);
  };

  useEffect(() => {
    if (testDetails) {
      var sort = testDetails.marks.sort((a, b) => b.score - a.score);
      sort = sort.slice(0, 10);
      setRanks(sort);
      //   console.log("sort:", sort);
    }
  }, [testDetails, edit]);
  const showRank = () => {};

  // var FinalDetails = [];
  return (
    <div className="flex-col container align-items-center pb-5">
      <h6 className="mt-4">
        Select any Subject and Click on "Get Test List!".
      </h6>
      <div className="flex-row justify-content-center align-items-center">
        <select
          className="custom-select mb-3 mt-3 pb-1 pe-2 ps-2"
          name="subject"
          defaultValue=""
          onChange={(e) => {
            setTests([]);
            setSubject(e.target.value);
            setTestDetails(null);
          }}
        >
          <option value="">Select Subjects</option>
          <option value="english">English</option>
          <option value="kannada">Kannada</option>
          <option value="hindi">Hindi</option>
          <option value="science">Science</option>
          <option value="maths">Mathematics</option>
          <option value="social">Social Science</option>
        </select>
        <button
          className="btn btn-sm btn-success ms-1 "
          type="button"
          onClick={() => {
            // console.log("sub:", subject);
            if (subject) {
              var temptests = allTests.filter((t) => t.subject === subject);
              setTests(temptests);
            }
          }}
        >
          Get Test List!
        </button>
      </div>
      {/* =============================Test List============================== */}
      <div className="flex-row justify-content-center m-0 mt-3 flex-nowrap col-xs-12 col-md-8">
        <div className="col">
          <div className="list-group text-center w-100">
            {tests.map((t, idx) => {
              return (
                <div
                  href="#!"
                  className="list-group-item list-group-item-action"
                  key={idx}
                >
                  <span className="ms-2 me-2">{t.testName}</span>
                  <span className="ms-2 me-2">{t.date}</span>
                  <span className="ms-2 me-2">Total-Marks : {t.maxMarks}</span>

                  <button
                    className="ms-1 btn-sm btn-warning me-0"
                    onClick={() => {
                      setTestDetails(t);
                      setEdit(false);
                      setAdd(false);
                      showRank();
                    }}
                  >
                    Show Scores
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ==============================Add Test===================================== */}
      {user.role == "teacher" ? (
        <div className="row justify-content-center mt-3 ">
          <button
            className="btn-sm btn-primary ms-auto"
            onClick={() => {
              setAdd(true);
              let today = new Date().toISOString().slice(0, 10);
              setTestDetails({
                testName: "",
                date: today,
                subject: subject,
                maxMarks: 100,
                marks: [],
              });
              //   console.log("NewDetails:", testDetails);
              setEdit(true);
              setAdd(true);
            }}
          >
            Add New Test
          </button>
        </div>
      ) : (
        <></>
      )}
      {testDetails ? (
        //   ==============================Card=====================================
        <div>
          <div className="card text-center mt-3">
            <span
              className="btn-danger close-btn ms-auto m-1"
              onClick={() => {
                setTestDetails(null);
                setAdd(false);
                setEdit(false);
              }}
            >
              X
            </span>
            <div className="card-body">
              <h5 className="card-title">
                Test Name :{" "}
                {edit ? (
                  <input
                    defaultValue={testDetails.testName}
                    type="text"
                    onChange={(e) => {
                      var temp = testDetails;
                      temp.testName = e.target.value;
                      setTestDetails(temp);
                    }}
                  />
                ) : (
                  testDetails.testName
                )}
              </h5>
              <p className="card-text">
                Total Marks :{" "}
                {edit ? (
                  <input
                    defaultValue={testDetails.maxMarks}
                    type="text"
                    style={{ width: "3.5rem" }}
                    onChange={(e) => {
                      var temp = testDetails;
                      temp.maxMarks = parseInt(e.target.value);
                      setTestDetails(temp);
                    }}
                  />
                ) : (
                  testDetails.maxMarks
                )}
              </p>
              Subject : {subject}
              <p className="card-text">
                <small className="text-muted">
                  Date :{" "}
                  {edit ? (
                    <input
                      defaultValue={testDetails.date}
                      type="text"
                      onChange={(e) => {
                        var temp = testDetails;
                        temp.date = e.target.value;
                        setTestDetails(temp);
                      }}
                    />
                  ) : (
                    testDetails.date
                  )}
                </small>
              </p>
              {!edit && (
                <div>
                  <h5 className="text-primary">Top 10 Rank List : </h5>
                  <table className="table table-light m-auto mt-4 table-hover">
                    <thead className="table-secondary">
                      <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ranks.map((r, i) => {
                        var user = students.filter((u) => u.id === r.id);
                        return (
                          <tr key={i}>
                            <th scope="col">{i + 1}</th>
                            <th scope="col">{user[0].name}</th>
                            <th scope="col">{r.score}</th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* ====================================Table================================ */}
          <h5 className="text-primary mt-3 mb-0 mx-auto text-center">
            Full Detail List :{" "}
          </h5>
          <table className="table table-light m-auto mt-2 table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Reg_Id</th>
                <th scope="col">Full Name</th>
                <th scope="col">Marks</th>
                <th scope="col">%</th>
                <th scope="col">Indicator</th>
              </tr>
            </thead>
            <tbody>
              {students.map((user, idx) => {
                var score = testDetails.marks.filter((m) => m.id == user.id);
                if (!score.length) {
                  var temp = testDetails;
                  temp.marks.push({ id: user.id, score: 0 });
                  setTestDetails(temp);
                  score = [{ score: 0 }];
                }
                //   var finalDetails = [];
                //   finalDetails.push({
                //   user: user,
                //   score: score[0].score,
                //   });
                //   setFinalDetails(finalDetails);
                //   })}
                //   {
                //   FinalDetails.map((f) => {
                return (
                  <ResultRow
                    user={user}
                    idx={idx}
                    key={user.id}
                    score={score[0].score}
                    max={testDetails.maxMarks}
                    edit={edit}
                    onInputChange={onInputChange}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
      {testDetails && user.role == "teacher" ? (
        <>
          {!add ? (
            <>
              {edit ? (
                <div className="flex-row justify-content-center mt-3 col-8">
                  <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={() => {
                      // setAdd(true);

                      //   console.log("NewDetails:", testDetails);
                      setEdit(false);
                      setTestDetails(null);
                      deleteTest();
                    }}
                  >
                    Delete This Test
                  </button>
                  <button
                    className="btn-sm btn-success m-2"
                    onClick={() => {
                      // setAdd(true);
                      setEdit(false);
                      //   console.log("NewDetails:", testDetails);
                      saveEditTest();
                    }}
                  >
                    Save Test Details
                  </button>
                </div>
              ) : (
                <div className="row justify-content-center mt-3">
                  <button
                    className="btn btn-sm btn-warning me-0 col"
                    onClick={() => {
                      setEdit(true);
                      setAdd(false);
                    }}
                  >
                    Edit This Test Scores
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="row justify-content-center mt-3">
                <button
                  className="btn btn-sm btn-success me-0 col"
                  onClick={() => {
                    if (testDetails.testName == "") {
                      alert("Test Name cannot be Empty.");
                      return;
                    } else {
                      //   console.log("Update New Test Scores:", testDetails);
                      createTest();
                    }
                  }}
                >
                  Update New Test Scores
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
