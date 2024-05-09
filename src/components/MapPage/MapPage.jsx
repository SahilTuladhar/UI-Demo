// MapPage.js
import React from "react";
import styles from "./MapPage.module.css";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MapComponent from "../MapContent/MapContent";

const MapPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.electionResultCover}>
        <Sidebar />
        <div className={styles.pageContent}>
          <div className={styles.pageContentLeft}>
            <div className={styles.electionInfo}>
              <div className={styles.electionInfoUp}>
                <h2>Map</h2>
              </div>
              <div className={styles.electionInfoDown}>
                <h3>Salina Gurung</h3>
                <div className={styles.electionDate}>
                  <CalendarTodayOutlinedIcon className={styles.icon} />
                  <p>09-05-2024</p>
                </div>
              </div>
            </div>
            <div className={styles.pieChartCover}>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
