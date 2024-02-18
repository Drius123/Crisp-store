/* eslint-disable no-nested-ternary */
import { contactList } from "../../data/data";
import { EnumText } from "../../types/types";
import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.contacts}>
      <h2>CONTACT US</h2>
      <div className={styles.list}>
        {contactList.map((item, index) => (
          <div className={styles.item}>
            <p>{item}</p>
            <p>
              {index === 0
                ? EnumText.ADDRESS
                : index === 1
                  ? EnumText.EMAIL
                  : index === 2
                    ? EnumText.PHONE
                    : EnumText.WORKING_DAYS_HOURS}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
