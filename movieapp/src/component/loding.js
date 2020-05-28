import React, { Component } from "react";
import ReactLoading from "react-loading";
import Loader from "react-loader-spinner";
import "./loding.css";
const loding = () => (
  <div className="loding">
    <Loader type="ThreeDots" color="red" height="300" width="200" />
  </div>
);
export default loding;
