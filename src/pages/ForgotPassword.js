import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <section className="auth">
        <div className="side1">
          <img src="/images/logo.png" alt="logo" />
          <h4>Bringing you the best of contemporary furniture</h4>
        </div>

        <div className="side2">
          <div>
            <h3>Did you Forget your password?? </h3>
            <p>Request for reset password Link </p>
          </div>

          <form action="">
            <div className="auth-fields">
              <label htmlFor="Email">Email Address</label>
              <input type="text" name="email" id="" />
            </div>

            <button className="button1">Request Link</button>
          </form>

          <div className="auth-options">
            <p>
              Already have an account?{" "}
              <Link className="color1" to="/signin">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
