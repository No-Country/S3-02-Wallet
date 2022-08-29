import { useRef } from "react";

import { useRouter } from "next/router";

import { Check } from "@styled-icons/entypo/Check";
import { IosArrowLeft } from "@styled-icons/fluentui-system-filled/IosArrowLeft";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useReactToPrint } from "react-to-print";

import styles from "../../styles/paySuccess.module.scss";
import { setSection } from "../../store/footerSlice";
import { Ticket } from "../../components/Ticket/Ticket";

const PaySuccess = () => {
  const dispatch = useDispatch();
  const paymentDetails = useSelector(
    (state) => state.paymentDetails.paymentDetails
  );
  const router = useRouter();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (paymentDetails.name === "") {
    router.replace("/home");
  } else {
    return (
      <motion.div
        animate={{
          backgroundColor: ["#a5eb78", "#ffff"],
          transition: {
            delay: 0.9,
            duration: 0.6,
          },
        }}
        className={styles.container}
      >
        <motion.span
          initial={{ display: "none" }}
          animate={{
            display: "inline-block",
            transition: {
              delay: 1,
            },
          }}
          className={styles.arrowContainer}
        >
          <IosArrowLeft
            className={styles.arrow}
            onClick={() => dispatch(setSection("home")) && router.push("/home")}
          />
        </motion.span>

        <motion.div
          className={styles.checkContainer}
          animate={{
            translateY: -70,
            transition: {
              delay: 0.9,
              duration: 0.6,
            },
          }}
        >
          <Check className={styles.check} />
        </motion.div>

        <motion.div
          className={styles.infoContainer}
          initial={{ display: "none" }}
          animate={{
            display: "inline-block",
            transition: {
              delay: 1,
            },
          }}
        >
          <div className={styles.text}>
            <h3>Done! Thank you for your payment</h3>
            <p>Operation 00456</p>
          </div>

          <div className={styles.details}>
            <h3>Payment Details</h3>
            <h4>Payment ref: 4328934</h4>
            <h4>Service Name: {paymentDetails.name}</h4>

            <span>
              <h3>Status</h3>
              <h4 style={{ color: "green", fontWeight: "bolder", fontSize: "20px"}}>Paid</h4>
            </span>

            <span>
              <h3>Payment Time</h3>
              <h4>{paymentDetails.paymentDate}</h4>
            </span>
          </div>

          <div style={{ display: "none" }}>
            <Ticket ref={componentRef} />
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={handlePrint} className={styles.button}>
              Download Ticket
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }
};

export default PaySuccess;
