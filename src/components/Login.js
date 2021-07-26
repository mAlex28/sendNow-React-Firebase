import React from "react";
import {
  GoogleOutlined,
  FacebookFilled,
  WechatOutlined,
} from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>
          <WechatOutlined className="logo-icon" />
          SendNow
        </h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookFilled /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
