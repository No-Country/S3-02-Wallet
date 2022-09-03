import { Home } from "@styled-icons/boxicons-solid/Home";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { Transfer } from "@styled-icons/boxicons-regular/Transfer";
import { Analytics } from "@styled-icons/material-outlined/Analytics";
import { FileText } from "@styled-icons/bootstrap/FileText";
import { useDispatch, useSelector } from "react-redux";

import { setSection } from "../../store/footerSlice";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const section = useSelector((state) => state.footer.section);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <span
        className={section === "home" ? styles.active : styles.footerIcon}
        onClick={() => dispatch(setSection("home"))}
      >
        <Home className={styles.icon} />
        <p>Home</p>
      </span>
      <span
        className={section === "cards" ? styles.active : styles.footerIcon}
        onClick={() => dispatch(setSection("cards"))}
      >
        <CreditCard className={styles.icon} />
        <p>Cards</p>
      </span>
      {/* <span
        className={section === "transfer" ? styles.active : styles.footerIcon}
        onClick={() => dispatch(setSection("transfer"))}
      >
        <Transfer className={styles.icon} />
        <p>Transfer</p>
      </span> */}
      <span
        className={section === "analytics" ? styles.active : styles.footerIcon}
        onClick={() => dispatch(setSection("analytics"))}
      >
        <Analytics className={styles.icon} />
        <p>Analytics</p>
      </span>
      <span
        className={section === "services" ? styles.active : styles.footerIcon}
        onClick={() => dispatch(setSection("services"))}
      >
        <FileText className={styles.icon} />
        <p>Services</p>
      </span>
    </div>
  );
};
