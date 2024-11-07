import React from "react";

export default function Courses() {
  return (
    <div className="container">
      <h2 className=" m-4 ">SUBJECTS</h2>

      <ul>
        <li>
          <h5>English</h5>
        </li>
        <li>
          <h5>Kannada</h5>
        </li>
        <li>
          <h5>Hindi</h5>
        </li>
        <li>
          <h5>Science</h5>
        </li>
        <li>
          <h5>Mathematics</h5>
        </li>
        <li>
          <h5>Social Science</h5>
        </li>
      </ul>
      <div className="mt-4 mb-4">
        <div className="ms-4 mb-2 mt-4 font-weight-bolder">
          <b>Download PDF version text-book of any Subject below.</b>
        </div>
        <a
          href="http://ktbs.kar.nic.in/New/index.html#!/textbook"
          target="_blank"
          rel="noreferrer"
        >
          <span className="subject-btn ms-4">Download</span>
        </a>
      </div>
      <div className="mt-3 mb-4">
        <div className="ms-4 mb-2 mt-4 font-weight-bolder">
          <b>Download Marks Distribution of Core Subjects below.</b>
        </div>
        <a
          href="http://www.kseeb.kar.nic.in/content%20weightage.asp"
          target="_blank"
          rel="noreferrer"
        >
          <span className="subject-btn ms-4">Download</span>
        </a>
      </div>
      <div className="mt-3 mb-4">
        <div className="ms-4 mb-2 mt-4 font-weight-bolder">
          <b>Download Previous years SSLC Question papers below.</b>
        </div>
        <a
          href="http://kseeb.kar.nic.in/sslc_question_paper.asp"
          target="_blank"
          rel="noreferrer"
        >
          <span className="subject-btn ms-4 mb-2">Download</span>
        </a>
      </div>
      <h4 className="ms-4">SSLC Board Exam Pattern</h4>
      <div className="m-3">
        <table className="table table-light">
          <thead className=" table-dark thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subjects</th>
              <th scope="col">Theory</th>
              <th scope="col">Internal</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>English</td>
              <td>100</td>
              <td>25</td>
              <td>125</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kannada</td>
              <td>80</td>
              <td>20</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Hindi</td>
              <td>80</td>
              <td>20</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Maths</td>
              <td>80</td>
              <td>20</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Science</td>
              <td>80</td>
              <td>20</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Social Science</td>
              <td>80</td>
              <td>20</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      <h4 className="ms-4">Career Guidance after SSLC</h4>
      <div className=" m-4">
        <h6>What to do after 10th?</h6>
        <div className="h6">
          <p>
            This is one of the most important decision you will be making in
            your entire life and yet, students many a times end up choosing a
            wrong career path and regret their entire life about this decision.{" "}
            <br />
            <br />
            There are various streams like Science, Commers, Arts and so on.
            Regardless of which stream you choose you will always encounter
            students like you competing for the same things that you want to
            achieve.
            <br />
            So, to stand-out among the competition always aim for the highest in
            that particular field.
            <br />
            For example,
            <br />
            If you want to become an Engineer, aim for getting admission into
            India's best Institutes like IITs, NITs, IIITs,... then you will
            become a much better Engineer compared to others.
            <br />
            This is an example and same goes with other fields as well.
            <br />
            <br />
            Here are some Important links that will help you to choose your
            career path :
          </p>
          <var className="h5 mt">1. Career Counselling for 10th class : </var>
          <a
            className=""
            target="_blank"
            href="https://www.monsterindia.com/career-advice/top-career-option-after-10th-and-career-counselling-for-10th-class-8405.html"
          >
            <button className="btn-xs btn-warning h6">
              <small>Click Here</small>
            </button>
          </a>
          <br />

          <var className="h5">2. IIT JEE Exam for Engineering: </var>
          <a
            className=""
            target="_blank"
            href="https://www.careerguide.com/career/entrance-exam/everything-about-you-needs-to-know-jee-mains"
          >
            <button className="btn-xs btn-warning h6">
              <small>Click Here</small>
            </button>
          </a>
          <br />

          <var className="h5">3. Career in Medical Field : </var>
          <a
            className=""
            target="_blank"
            href="https://medicine.careers360.com/articles/medical-courses-after-12th"
          >
            <button className="btn-xs btn-warning h6">
              <small>Click Here</small>
            </button>
          </a>
          <br />

          <var className="h5">
            4. All different possible fields available :{" "}
          </var>
          <a
            className=""
            target="_blank"
            href="https://drive.google.com/file/d/1P-QYHKrYW-HvGT87W0OIBtVMOclclZEi/view?usp=sharing"
          >
            <button className="btn-xs btn-warning h6">
              <small>Click Here</small>
            </button>
          </a>
          <br />
          <br />
          <p>
            If you are someone who can't afford for high quality education,
            there are various Scholarships that government provides for bright
            students. Know about them, apply before deadlines and achieve your
            goals.
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
