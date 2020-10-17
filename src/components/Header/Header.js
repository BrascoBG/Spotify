import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <SearchIcon />
        <input placeholder="Search for Artist, Songs or Podcasts" type="text" />
      </div>
      <div className={styles.header_right}>
        <Avatar src={user?.images[0]?.ulr} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
