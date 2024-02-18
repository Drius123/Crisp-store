import { NavLink } from "react-router-dom";
import { features } from "../../data/data";
import routeNames from "../../routing/routs";
import styles from "./Features.module.scss";

export default function Features() {
  return (
    <div className={styles.features}>
      <h2>FEATURES</h2>
      <div className={styles.list}>
        {features.map((item) => (
          <NavLink to={routeNames.FEATURES}>{item}</NavLink>
        ))}
      </div>
    </div>
  );
}
