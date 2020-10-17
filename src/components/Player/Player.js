import React from "react";
import styles from "./Player.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Player = ({ spotify }) => {
  return (
    <div className={styles.player}>
      <div className={styles.player_body}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
