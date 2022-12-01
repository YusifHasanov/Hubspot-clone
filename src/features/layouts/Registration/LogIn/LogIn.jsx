import React, { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Go from "../../../../GlobalRoute";
import { ImCheckmark } from "react-icons/im";
import Regex from "../../../../Regex";
import {RiExternalLinkLine}from "react-icons/ri"
const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const disabled = !Boolean(password.length > 5 && Regex.email(email));

  const formSubmitHandler = (e) => {
    console.log("form submitted");

    console.log(email, password);
    e.preventDefault();
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <form
          onSubmit={formSubmitHandler}
          action=""
          className={styles.loginForm}
        >
          <div className={styles.toSignUpBox}>
            Don't have an account?
            <div
              onClick={() => {
                Go.to(navigate, "/getstarted");
              }}
              className={styles.toSignUp}
            >
              Sign up
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor={"emailAddress"}>
              Email address
            </label>
            <input
              className={styles.formInput}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
              type="text"
              name={"emailAddress"}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor={"password"}>
              Password
            </label>
            <div
              onClick={() => {
                setIsShow((p) => !p);
              }}
              className={styles.show}
            >
              Show Password
            </div>
            <input
              className={styles.formInput}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
              type={isShow ? "text" : "password"}
              name={"password"}
            />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.show}>Forgor my pssword</div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.check}>
              {!isCheck ? (
                <div
                  className={styles.checkBox}
                  onClick={() => {
                    setIsCheck((p) => !p);
                  }}
                ></div>
              ) : (
                <div
                  className={styles.checkedBox}
                  onClick={() => {
                    setIsCheck((p) => !p);
                  }}
                >
                  <ImCheckmark className={styles.checkIcon} />
                </div>
              )}
              <div
                onClick={() => {
                  setIsCheck((p) => !p);
                }}
                className={styles.rememberMe}
              >
                Remember me
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <button
              disabled={disabled}
              className={styles.loginButton}
              type={"submit"}
            >
              Log in
            </button>
          </div>
          <hr />
        </form>
        <div className={styles.loginWithGoogle}>
          <button className={styles.loginGoogle}>
            <img
              className={styles.googleIcon}
              src={ "https://static.hsappstatic.net/LoginUI/static-1.7206/img/google-logo.png" }
              alt={"googleLoginButton"}
            />
            Sign in with Google
          </button>
        </div>
        <div className={styles.loginWithSSO}>
          <button className={styles.loginSSO}>Log in with SSO</button>
        </div>
        <div className={styles.loginFooter}>
            <div>©2022 HubSpot, Inc. All Rights Reserved.</div>
           <Link to={"/privacy-policy"} target={"_blank"}> <div className={styles.policy} >Privacy Policy <summary><RiExternalLinkLine className={styles.targetIcon}/></summary></div></Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
