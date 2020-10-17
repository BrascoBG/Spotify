import React from "react";
import styles from "./SongRow.module.css";

const SongRow = ({ track }) => {
  return (
    <div className={styles.songRow}>
      <img
        src={track.album.images[0].url}
        className={styles.songRow_album}
        alt=""
      />
      <div className={styles.songRow_info}>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
