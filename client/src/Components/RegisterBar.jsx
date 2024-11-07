import React from "react";

export default function RegisterBar() {
  return (
    <>
      <div className="container navbar" id="register-bar">
        <a
          href="/register"
          className="btn btn-sm btn-warning ms-auto"
          id="register-btn"
        >
          Register
        </a>
        {/* <a href="/login" className="btn btn-sm btn-dark ms-3" id="login-btn">
          Login
        </a> */}
      </div>
    </>
  );
}
