import { useState } from "react";

import { EyeOutline } from "@styled-icons/evaicons-outline/EyeOutline";
import { EyeOffOutline } from "@styled-icons/evaicons-outline/EyeOffOutline";
import { Asterisk } from "@styled-icons/foundation/Asterisk";

import styles from "./balance.module.scss";

const Balance = () => {
  const [show, setShow] = useState(true);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className={styles.container}>
      <span className={styles.balance}>
        <h1>Available balance</h1>
        {show ? (
          <EyeOutline
            style={{ width: "24px", height: "24px", color: "#347af0" }}
            onClick={() => setShow(!show)}
          />
        ) : (
          <EyeOffOutline
            style={{ width: "24px", height: "24px", color: "#347af0" }}
            onClick={() => setShow(!show)}
          />
        )}
      </span>

      {show ? (
        <span className={styles.balance}>
          <h3>{formatter.format(50000)}</h3>
        </span>
      ) : (
        <span className={styles.balance}>
          <h3>$</h3>
          <Asterisk
            style={{ width: "24px", height: "24px", color: "#347af0" }}
          />
          <Asterisk
            style={{ width: "24px", height: "24px", color: "#347af0" }}
          />
          <Asterisk
            style={{ width: "24px", height: "24px", color: "#347af0" }}
          />
        </span>
      )}
    </div>
  );
};

export default Balance;
