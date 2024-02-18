import { ReactSVG } from "react-svg";
import { brands } from "../../data/data";
import styles from "./SectionBrands.module.scss";

export default function SectionBrands() {
  return (
    <div className={styles.brands}>
      <div className={styles.brand}>
        {brands.map((item, i) => (
          <ReactSVG className="" src={item} key={i} />
        ))}
      </div>
    </div>
  );
}
