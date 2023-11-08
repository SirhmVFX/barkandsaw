import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <section className="auth">
        <div className="side1">
          <img src="/images/logo.png" alt="logo" />
          <h4>Bringing you the best of contemporary furniture</h4>
        </div>

        <div className="side2">
          <h3>
            New to Bark&Saw?{" "}
            <Link className="color1" to="/signup">
              Sign up
            </Link>{" "}
          </h3>

          <form action="">
            <div className="auth-fields">
              <label htmlFor="Email">Email Address</label>
              <input type="text" name="email" id="" />
            </div>

            <div className="auth-fields">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
            </div>

            <div className="remember-me">
              <div>
                <input type="checkbox" name="agree" id="" />
                <label htmlFor="agree">Remember Me</label>
              </div>

              <p>
                <Link className="color1" to="/forgot-password">
                  Forgot Password
                </Link>
              </p>
            </div>

            <button className="button2">Sign In</button>
          </form>

          <div className="auth-options">
            <p>Or Log In with</p>

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

export default Signin;
