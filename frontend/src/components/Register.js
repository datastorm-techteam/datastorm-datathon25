import React from "react";

const Register = () => {
  return (
    <div id="register"
      className="container mt-5 d-flex justify-content-center align-items-center"
    >
      <div className="text-center">
        <h1>Register</h1>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://docs.google.com/forms/d/e/your-google-form-id/viewform?embedded=true"
            width="640"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Register;
