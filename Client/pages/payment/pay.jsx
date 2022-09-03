import { useRouter } from "next/router";
import Image from "next/image";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { IosArrowLeft } from "@styled-icons/fluentui-system-filled/IosArrowLeft";
import { Backspace } from "@styled-icons/bootstrap/Backspace";
import { Check } from "@styled-icons/entypo/Check";
import date from "date-and-time";

import styles from "../../styles/pay.module.scss";
import { setPaymentDetails } from "../../store/paySlice";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 12,
});

const Pay = () => {
  const [amount, setAmount] = useState("0");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const now = new Date();

  const PaymentDetails = useSelector(
    (state) => state.paymentDetails.paymentDetails
  );
  const serviceName = PaymentDetails.name;
  const serviceImg = PaymentDetails.imgPath;


function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if ((charCode < 48 || charCode > 57)  
  && (charCode < 96 || charCode > 105) 
){
      evt.preventDefault();
      return false;
  }
  return true;
}

  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event;
    console.log(isNumberKey(event))
     if(isNumberKey(event)){
      setAmount(prevUserText => `${prevUserText}${key}`);
    }
}, []);

useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
    };
}, [handleUserKeyPress]);



  const handleDelete = () => {
    setLoading(false);
    setAmount(amount === "" || amount === "0" ? "0" : amount.slice(0, -1));
  };

  useEffect(() => {
    if (amount !== "0") {
      dispatch(
        setPaymentDetails({
          name: serviceName,
          imgPath: serviceImg,
          amount: Number(amount),
          paymentDate: date.format(now, "MMM D, YYYY - HH:mm"),
          status: "Paid",
        })
      );
    }

    if (loading) {
      setTimeout(() => {
        router.push("/payment/success");
      }, 500);
    }
  }, [amount, loading]);

  if (PaymentDetails.name === "") {
    router.replace("/home");
  } else {
    return (
      <motion.div
        initial={{ translateY: 1000 }}
        animate={{
          translateY: 0,
          transition: {
            duration: 0.4,
          },
        }}
        exit={{
          transition: {
            duration: 0.8,
          },
        }}
        className={styles.container}
      >
        <IosArrowLeft
          className={styles.arrowIcon}
          onClick={() =>
            dispatch(
              setPaymentDetails({
                name: "",
                imgPath: "",
                amount: 0,
                paymentDate: "",
              })
            ) && router.push("/home")
          }
        />

        <div className={styles.imageContainer}>
          <span className={styles.image}>
            <Image
              src={PaymentDetails.imgPath}
              width="120px"
              height="120px"
              alt="Service Image"
            />
          </span>
        </div>

        <div className={styles.text}>
          <h3>{PaymentDetails.name}</h3>
          <p>Balance: {formatter.format(50000)}</p>
        </div>

        <div className={styles.amount}>
          <h3 className={styles.inputAmount}>{formatter.format(amount)}</h3>
          {/* <input
          type="number"
          readOnly
          value={amount}
          className={styles.inputAmount}
          onKeyPress={handleKeyPress}
        /> */}
        </div>

        <div
          className={styles.submit}
          style={
            amount === "0" || amount === ""
              ? {
                  display: "hidden",
                }
              : { display: "flex" }
          }
        >
          <button
            onClick={() =>
              amount !== "0" || amount !== ""
                ? setLoading(true)
                : setLoading(false)
            }
            className={styles.check}
            disabled={amount === "0" || amount === "" ? true : false}
          >
            {loading ? (
              <span className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            ) : (
              <Check className={styles.checkIcon} />
            )}
          </button>
        </div>

        <div className={styles.numpad}>
          <span className={styles.numpadRow}>
            <div
              onClick={() => setAmount(amount === "0" ? "1" : amount + "1")}
              className={styles.key}
            >
              1
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "2" : amount + "2")}
              className={styles.key}
            >
              2
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "3" : amount + "3")}
              className={styles.key}
            >
              3
            </div>
          </span>

          <span className={styles.numpadRow}>
            <div
              onClick={() => setAmount(amount === "0" ? "4" : amount + "4")}
              className={styles.key}
            >
              4
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "5" : amount + "5")}
              className={styles.key}
            >
              5
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "6" : amount + "6")}
              className={styles.key}
            >
              6
            </div>
          </span>

          <span className={styles.numpadRow}>
            <div
              onClick={() => setAmount(amount === "0" ? "7" : amount + "7")}
              className={styles.key}
            >
              7
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "8" : amount + "8")}
              className={styles.key}
            >
              8
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "9" : amount + "9")}
              className={styles.key}
            >
              9
            </div>
          </span>

          <span className={styles.numpadRow}>
            <div onClick={() => setAmount(amount + ".")} className={styles.key}>
              .
            </div>
            <div
              onClick={() => setAmount(amount === "0" ? "0" : amount + "0")}
              className={styles.key}
            >
              0
            </div>
            <div onClick={() => handleDelete()} className={styles.key}>
              <Backspace className={styles.backspaceIcon} />
            </div>
          </span>
        </div>
      </motion.div>
    );
  }
};

export default Pay;
