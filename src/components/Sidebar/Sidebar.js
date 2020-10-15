import React from "react";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import styles from "./Sidebar.module.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.sidebar_logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo"
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className={styles.sidebar_title}>PLAYLISTS</strong>
      <hr />
      <SidebarOptions title="Hip-Hop" />
      <SidebarOptions title="Rock" />
      <SidebarOptions title="RnB" />
    </div>
  );
};

export default Sidebar;
