import { EnumText } from "../../types/types";
import Btn from "../../ui/Button/Btn";
import { previewImg } from "../../data/data";
import styles from "./SectionPreview.module.scss";

export default function SectionPreview() {
  return (
    <div className={styles.preview}>
      <div className={styles.preview__text}>
        <h1>{EnumText.SECTION_PREVIEW_TEXT}</h1>
        <Btn type="button" text="SHOP NOW" />
      </div>
      <div className={styles.preview__img}>
        {previewImg.map((item) => (
          <img src={item} alt="img" />
        ))}
      </div>
    </div>
  );
}
