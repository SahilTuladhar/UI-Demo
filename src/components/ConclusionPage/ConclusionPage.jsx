import styles from "./ConclusionPage.module.css";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

const ConclusionPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.electionResultCover}>
        <Sidebar />
        <div className={styles.pageContent}>
          <div className={styles.pageContentLeft}>
            <div className={styles.electionInfo}>
              <div className={styles.electionInfoUp}>
                <h2>Conclusion</h2>
              </div>
              <div className={styles.electionInfoDown}>
                <div className={styles.electionInfoDownLeft}>
                  <h3>
                    The average temperature graph is a representation of
                    temperature data over a specific geographic area and time
                    period. This graph is typically created using data collected
                    from various weather stations or remote sensing sources.
                  </h3>
                </div>

                <div className={styles.electionInfoDownRight}>
                  <div className={styles.electionDate}>
                    <AcUnitOutlinedIcon className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConclusionPage;
