import { Outlet } from "react-router-dom";
import styles from "./appLayout.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Header />
      <div className={`app-layout__container ${styles.app}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
