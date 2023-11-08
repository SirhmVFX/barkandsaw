import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <section className="auth">
        <div className="side1">
          <img src="/images/logo.png" alt="logo" />
          <h4>Bringing you the best of contemporary furniture</h4>
        </div>

        <div className="side2">
          <h3>Create Your Account </h3>

          <form action="">
            <div className="auth-fields">
              <label htmlFor="Email">Email Address</label>
              <input type="text" name="email" id="" />
            </div>

            <div className="auth-fields">
              <label htmlFor="username">Mobile Number</label>
              <input type="phone" name="username" id="" />
            </div>

            <div className="auth-fields">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
            </div>

            <div>
              <input type="checkbox" name="agree" id="" />
              <label htmlFor="agree">
                By registering, you accept our terms of use and privacy policy
              </label>
            </div>

            <button className="button1">Sign Up</button>
          </form>

          <div className="auth-options">
            <p>
              Already have an account?{" "}
              <Link className="color1" to="/signin">
                Log In
              </Link>
            </p>

            <p>Or Sign up with</p>

            <div className="top-icons">
              <img
                className="icons"
                src="/images/flat-color-icons_google.png"
                alt="authoptions"
              />
              <img
                className="icons"
                src="/images/logos_facebook.png"
                alt="authoptions"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
