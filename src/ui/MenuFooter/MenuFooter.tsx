import { NavLink } from "react-router-dom";
import { menuList } from "../../data/data";
import routeNames from "../../routing/routs";
import styles from "./MenuFooter.module.scss";

export default function MenuFooter() {
  return (
    <div className={styles.menu}>
      <h2>MENU</h2>
      <div className={styles.list}>
        {menuList.map((item) => (
          <NavLink to={routeNames.MENU}>{item}</NavLink>
        ))}
      </div>
    </div>
  );
}
