import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import routeNames from "../../routing/routs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <NavLink to={routeNames.HOME}>
        <img src="" alt="" />
      </NavLink>
    </div>
  );
}
