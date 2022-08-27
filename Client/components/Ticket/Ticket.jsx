import React from "react";

import { useSelector } from "react-redux";
import { Check } from "@styled-icons/entypo/Check";

import styles from "./Ticket.module.scss";

export const Ticket = React.forwardRef((props, ref) => {
  const paymentDetails = useSelector(
    (state) => state.paymentDetails.paymentDetails
  );

  return (
    <div ref={ref} className={styles.container}>
      <style type="text/css" media="print">
        {"\
  @page { size: portrait; }\
"}
      </style>
      <Check className={styles.check} />
      <h3>Thank you for your payment!</h3>
      <p>Operation 00456</p>

      <div className={styles.details}>
        <h3>Payment Details</h3>
        <h4>Payment ref: 4328934</h4>
        <h4>Service Name: {paymentDetails.name}</h4>

        <span>
          <h3>Status</h3>
          <h4
            style={{
              color: "green",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            {paymentDetails.status}
          </h4>
        </span>

        <span>
          <h3>Payment Time</h3>
          <h4>{paymentDetails.paymentDate}</h4>
        </span>
      </div>
    </div>
  );
});
