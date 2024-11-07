import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Feedback({ user, feedbacks }) {
  const [feedback, setFeedback] = useState("");
  const [subFeedbacks, setSubFeedbacks] = useState([]);
  const [subject, setSubject] = useState("");
  useEffect(() => {
    if (feedbacks) {
      var tempFeedbacks = [];
      if (user.role === "teacher") {
        tempFeedbacks = feedbacks.filter((f) => f.subject === user.subject);
        setSubFeedbacks(tempFeedbacks);
      } else {
        setSubFeedbacks(feedbacks);
      }
    }
  }, [feedbacks, user]);

  const sendFeedback = (e) => {
    e.preventDefault();

    var fullDate = new Date();
    var date = fullDate.toDateString();
    var minutes = fullDate.getMinutes();
    var hours = fullDate.getHours();
    var AmOrPm = hours >= 12 ? "PM" : "AMs";
    hours = hours % 12 || 12;
    var finalDate =
      "Date- " + date + ", " + "Time- " + hours + ":" + minutes + " " + AmOrPm;
    // console.log(finalDate);
    if (subject)
      axios
        .post("/api/feedbacks", {
          id: user.id,
          name: user.name,
          subject: subject,
          feedback: feedback,
          date: finalDate,
        })
        .then(function (response) {
          //   console.log(response.data);
          alert(response.data);
        })
        .catch(function (error) {
          alert(error.response.data);
        });
    else alert("Please Select Subject to Which you want to send!");
  };

  return (
    <>
      {user.role === "student" || user.role === "d group" ? (
        <>
          <form onSubmit={sendFeedback}>
            <div className="alert alert-warning text-center my-4 col-11 mx-auto">
              Only Selected Teacher can See your Feedbacks and NOT visible to
              Students.
            </div>
            <div className="col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6 mx-auto">
              <div className="row">
                <div className="col text-center">
                  <h1>Feedback</h1>
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <textarea
                    type="text"
                    className="form-control textarea"
                    placeholder="Write Your Feedback here."
                    rows="5"
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex-row content-center mt-4">
                <span>Select Subject Teacher</span>
              </div>
              <div className="flex-col justify-content-center align-items-center col-6 mx-auto">
                <select
                  className="form-select mb-3 mt-2 pb-1 pe-2 ps-2"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option></option>
                  <option value="english">English</option>
                  <option value="kannada">Kannada</option>
                  <option value="hindi">Hindi</option>
                  <option value="science">Science</option>
                  <option value="maths">Mathematics</option>
                  <option value="social">Social Science</option>
                </select>
                <button className="ms-1 btn-sm btn-success me-0" type="submit">
                  Send Feedback
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <div className=" my-4 col-11 mx-auto">
          <div className="row p-4 flex-row justify-content-center">
            {subFeedbacks.map((feedback) => {
              return (
                <div className="col-10  mb-5">
                  <div className="card text-light student-card p-3">
                    <div className="mt-2 mb-2">
                      <small>From : </small>
                    </div>{" "}
                    <h5 className="text-capitalize mb-3">{feedback.name}</h5>
                    <p className="card-subtitle mb-2 text-info font-weight-light">
                      Posted On : {feedback.date}
                    </p>
                    <p className="text-capitalize">
                      To : {`${feedback.subject}`} teacher
                    </p>
                    <div className="mt-1 text-warning">Feedback : </div>
                    <p>{feedback.feedback}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
