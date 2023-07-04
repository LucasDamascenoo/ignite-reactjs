import styles from "./Header.module.css";
import ignitelogo from "../assets/img/ignite-logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={ignitelogo} />
      <strong>Ignite Feed</strong>;
    </div>
  );
}
