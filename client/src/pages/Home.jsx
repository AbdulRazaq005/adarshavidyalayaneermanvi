import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import ProfileCard from "../Components/ProfileCard";
import RegisterBar from "../Components/RegisterBar";

export default function Home({ user, students, loginStatus }) {
  const [bday, setBday] = useState(null);
  useEffect(() => {
    if (students) {
      var bdayUser = students.filter((u) => {
        var dob = new Date(u.dob);
        var today = new Date();
        if (
          dob.getDate() === today.getDate() &&
          dob.getMonth() === today.getMonth()
        )
          return true;
      });
      setBday(bdayUser);
    }
  }, [students]);
  //   console.log("bday:", bday);

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
    <>
      {/* <RegisterBar loginStatus={loginStatus} /> */}
      <div className="main-content">
        <div className="flex-row content-center w-100 mt-3">
          <Carousel />
          <ProfileCard user={user} />
        </div>
        {bday ? (
          bday.map((b) => {
            return (
              <div
                className="col-11 col-sm-8 col-md-8 col-lg-6 col-xl-6 mx-auto my-5 p-4 "
                style={{ backgroundImage: "url('./images/shine1.gif')" }}
              >
                <div className="birthday-card">
                  <img
                    src={b.profileURL}
                    alt="Birthdayboyimage"
                    className="bday-image"
                  />
                </div>
                <div className="alert alert-primary text-center">
                  <h5 className="px-4">
                    Happy Birthday{" "}
                    <b className="text-dark">{`${titleCase(b.name)}`}</b>, May
                    your Birthday be sprinkled with Fun and Laughter, God Bless
                    You.
                  </h5>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        <h6 className="mt-4 text-center">Welcome to</h6>
        <h2 className="mt-2 text-center"> Adarsha Vidyalaya RMSA Neermanvi</h2>
        <h4 className="mt-4 text-center text-secondary">
          SSLC Preformance Enhancement Web-Application <br />A Planned Learning
          for Bright Future
        </h4>
        <h5 className="mt-2 text-center">
          SSLC Class Teacher - Ranajith Kumar
        </h5>
        <h5 className="mt-2 text-center">Head Master - Sri Devayya</h5>
        <div className="homepage-content container p-3 ">
          <h5 className="ms-4" id="about">
            About
          </h5>
          <ul>
            <li className="mb-2">
              This App is designed to Boost the Performance by Monitoring
              student performance in Sequence of tests conducted in all the
              Subjects.
            </li>
            <li className="mb-2">
              Students can view their <b>Scores</b> and Top 10 <b>Rank List </b>
              in all the tests conducted.
            </li>
            <li className="mb-2">
              Students can give their feedback to any subject Teacher in{" "}
              <b>Feedback</b> Section.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
