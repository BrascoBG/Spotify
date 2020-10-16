import React from "react";
import styles from "./Footer.module.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <img
          className={styles.footer_albumLogo}
          src="https://img.discogs.com/wgjO_bMsgyd70YsjbTvAkaZ21Fk=/fit-in/580x615/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4212342-1358690801-3243.jpeg.jpg"
          alt=""
        />
        <div className={styles.footer_songInfo}>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className={styles.footer_center}>
        <ShuffleIcon className={styles.footer_green} />
        <SkipPreviousIcon className={styles.footer_icon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          className={styles.footer_icon}
        />
        <SkipNextIcon className={styles.footer_icon} />
        <RepeatIcon className={styles.footer_green} />
      </div>
      <div className={styles.footer_right}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider className={styles.footer_slider} />
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
