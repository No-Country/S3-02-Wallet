import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { Transfer } from "@styled-icons/boxicons-regular/Transfer";
import { Analytics } from "@styled-icons/material-outlined/Analytics";
import { FileText } from "@styled-icons/bootstrap/FileText";
import { useDispatch } from "react-redux";

import styles from "./MiddleMenu.module.scss";
import { setSection } from "../../store/footerSlice";

const MiddleMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div
        onClick={() => dispatch(setSection("cards"))}
        className={styles.menuItem}
      >
        <CreditCard className={styles.icon} />
        <h5>Cards</h5>
      </div>

      {/* <div
        onClick={() => dispatch(setSection("transfer"))}
        className={styles.menuItem}
      >
        <Transfer className={styles.icon} />
        <h5>Transfer</h5>
      </div> */}

      <div
        onClick={() => dispatch(setSection("analytics"))}
        className={styles.menuItem}
      >
        <Analytics className={styles.icon} />
        <h5>Analytics</h5>
      </div>

      <div
        onClick={() => dispatch(setSection("services"))}
        className={styles.menuItem}
      >
        <FileText className={styles.icon} />
        <h5>Services</h5>
      </div>
    </div>
  );
};

export default MiddleMenu;
