import like from "../../assets/like.svg";
import bag from "../../assets/bag.svg";
import styles from "./ShopInf.module.scss";

export default function ShopInf() {
  return (
    <div className={styles["shop-inf"]}>
      <div className="like">
        <img src={like} alt="like" />
      </div>
      <div className={styles["shopping-cart"]}>
        <img src={bag} alt="bag" />
        <div className={styles.price}>
          <p>Shopping Cart</p>
          <p>0,00 EUR</p>
        </div>
      </div>
    </div>
  );
}
