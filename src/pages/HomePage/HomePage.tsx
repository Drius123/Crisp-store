import SectionBrands from "../../components/SectionBrands/SectionBrands";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SectionPreview />
      <SectionBrands />
    </main>
  );
}
