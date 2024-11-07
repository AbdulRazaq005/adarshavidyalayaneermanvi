import React, { useState, useEffect } from "react";

export default function Profile({ students, user }) {
  const [student, setStudent] = useState({
    id: "profile",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  var a = 1;
  useEffect(() => {
    if (students) {
      var temp = students.filter((s) => s.id == user.id);
      temp = temp[0];
      //   console.log(students);
      //   console.log(user);
      if (a) {
        setStudent(temp);
        a = 0;
      }
    }
  }, [students]);
  return (
    <div>
      <div className="alert alert-warning text-center mx-5 my-3">
        <h5 className="px-4">
          If you Forget Password or want to Update your Profile Details,
          Register again with required changes
        </h5>
      </div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-5 mx-auto mt-3">
        {student ? (
          <div className="card text-light student-card">
            <div className="card-body text-center">
              <img
                className="avatar rounded-circle"
                src={user.profileURL}
                alt="Student Not Registered"
              />
              <h4 className="card-title text-capitalize">{student.name}</h4>
              <p className="card-subtitle mb-2 text-info font-weight-light">
                Id : {student.id}
              </p>
              <p className="card-text bg-dark">{student.email}</p>
              <>
                <a className="text-light btn-success  btn-sm">
                  {`Phone : ${student.phone}`}
                </a>
                <div className="mt-2 text-warning">Address : </div>
                <p>{`${student.address}`}</p>
              </>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
