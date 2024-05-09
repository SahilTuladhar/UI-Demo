import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../ui/Navbar/Navbar";
import EastIcon from "@mui/icons-material/East";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import InfoIcon from "@mui/icons-material/Info";

import { Link } from "react-router-dom";

const getStartedClicked = () => {
  window.location.href = "/map-page";
};

const onIceClicked = () => {
  window.location.href = "/ice-graph-page";
};

const onTempClicked = () => {
  window.location.href = "/temp-graph-page";
};

const onConcludeClicked = () => {
  window.location.href = "/conclusion-page";
};

const LandingPage = () => {
  return (
    <div>
      <div className={styles.imageCover}>
        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.bodyTitle}>Decentralized Safe Voting System</h1>
          <h5 className={styles.bodyContent}>
            Our decentralized voting application utilizes secure blockchain
            technology, ensuring transparent and authentic voting experiences.
            Empowering users, it guarantees privacy, trust, and direct
            engagement in democratic processes, revolutionizing the way we
            participate in elections.
          </h5>
        </div>

        <Link to="/election-form">
          <button onClick={getStartedClicked} className={styles.startButton}>
            <p>Get Started</p>
            <EastIcon />
          </button>
        </Link>
      </div>

      <div className={styles.featureCover}>
        <div className={styles.feature} onClick={onIceClicked}>
          <p>Ice Melting Graph</p>

          <AcUnitOutlinedIcon className={styles.icon} />
        </div>

        <div className={styles.feature} onClick={onTempClicked}>
          <p>Average Temperature Graph</p>
          <ThermostatOutlinedIcon className={styles.icon} />
        </div>

        <div className={styles.feature} onClick={onConcludeClicked}>
          <p>Conclusion</p>
          <InfoIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
