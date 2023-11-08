import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <>
      <section className="auth">
        <div className="side1">
          <img src="/images/logo.png" alt="logo" />
          <h4>Bringing you the best of contemporary furniture</h4>
        </div>

        <div className="side2">
          <div>
            <h3>Reset Your Password </h3>
            <p>Enter new password </p>
          </div>

          <form action="">
            <div className="auth-fields">
              <label htmlFor="Email">Enter New Password</label>
              <input type="text" name="email" id="" />
            </div>

            <div className="auth-fields">
              <label htmlFor="Email">Confirm New Password</label>
              <input type="text" name="email" id="" />
            </div>

            <button className="button1">Change Password</button>
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

export default ResetPassword;
