import { NavLink } from "react-router-dom";
import routeNames from "../../routing/routs";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Nav from "../../ui/Nav/Nav";
import ShopInf from "../../ui/ShopInf/ShopInf";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="header__container">
        <div className={styles.content}>
          <NavLink to={routeNames.HOME}>
            <img src={logo} alt="" />
          </NavLink>
          <Nav />
          <div className={styles["account-link"]}>
            <NavLink to={routeNames.SIGN}>SIGN IN</NavLink>
            <NavLink to={routeNames.CREATE}>CREATE AN ACCOUNT</NavLink>
            <ShopInf />
          </div>
        </div>
      </div>
    </header>
  );
}
