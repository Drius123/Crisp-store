import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { NavItems } from "../../data/data";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-menu"]}>
        {NavItems.map((item: string) => (
          <li className="item">
            <NavLink to={`${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
