import React, { Component } from "react";
import ReactLoading from "react-loading";
import "./loding.css";
const loding = () => (
  <div className="loding">
    <ReactLoading type="cylon" color="red" height={667} width={375} />
  </div>
);
export default loding;
