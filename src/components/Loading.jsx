import React from "react";
import Styles from "../styles/Loading.module.css";

export const Loading = () => {
  return (
    <div className={Styles.loading_container}>
      <div className={Styles.container}>
        <div className={Styles.yellow}></div>
        <div className={Styles.red}></div>
        <div className={Styles.blue}></div>
        <div className={Styles.violet}></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};
