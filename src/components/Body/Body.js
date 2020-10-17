import React from "react";
import Header from "../Header/Header";
import styles from "./Body.module.css";
import { useDataLayerValue } from "../../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className={styles.body}>
      <Header spotify={spotify} />
      <div className={styles.body_info}>
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className={styles.body_infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          {console.log(discover_weekly)}
        </div>
      </div>
      <div className={styles.body_songs}>
        <div className={styles.body_icons}>
          <PlayCircleFilledIcon className={styles.body_shufle} />
          <FavoriteIcon fontSize="large" className={styles.body_favorite} />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
