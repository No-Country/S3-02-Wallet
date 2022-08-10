import { useState } from "react";

import { Home } from "@styled-icons/boxicons-solid/Home";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { Transfer } from "@styled-icons/boxicons-regular/Transfer";
import { Analytics } from "@styled-icons/material-outlined/Analytics";
import { FileText } from "@styled-icons/bootstrap/FileText";

import styles from "../styles/footer.module.scss";

export const Footer = () => {
  const [active, setActive] = useState(null);

  return (
    <div className={styles.container}>
      <span
        className={active === 1 ? styles.active : styles.footerIcon}
        onClick={() => setActive(1)}
      >
        <Home className={styles.icon} />
        <p>Home</p>
      </span>
      <span
        className={active === 2 ? styles.active : styles.footerIcon}
        onClick={() => setActive(2)}
      >
        <CreditCard className={styles.icon} />
        <p>Cards</p>
      </span>
      <span
        className={active === 3 ? styles.active : styles.footerIcon}
        onClick={() => setActive(3)}
      >
        <Transfer className={styles.icon} />
        <p>Transfer</p>
      </span>
      <span
        className={active === 4 ? styles.active : styles.footerIcon}
        onClick={() => setActive(4)}
      >
        <Analytics className={styles.icon} />
        <p>Analytics</p>
      </span>
      <span
        className={active === 5 ? styles.active : styles.footerIcon}
        onClick={() => setActive(5)}
      >
        <FileText className={styles.icon} />
        <p>Services</p>
      </span>
    </div>
  );
};
