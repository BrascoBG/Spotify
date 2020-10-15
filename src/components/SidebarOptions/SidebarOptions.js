import React from "react";
import styles from "./SidebarOptions.module.css";

const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className={styles.sidebarOptions}>
      {Icon && <Icon className={styles.sidebarOptions_icon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;
