import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import styles from "../../styles/home.module.scss";
import Balance from "../Balance/Balance";
import CardSelector from "../CardSelector/CardSelector";
import { setOpen } from "../../store/dropdownSlice";
import { setShowProfile } from "../../store/profileSlice";
import MiddleMenu from "../MiddleMenu/MiddleMenu";
import Offers from "../Offers/Offers";
import TransactionsContainer from "../TransactionsContainer/TransactionsContainer";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      className={styles.container}
      onClick={() =>
        dispatch(setOpen(false)) && dispatch(setShowProfile(false))
      }
    >
      <div className={styles.content}>
        <Balance />
        <MiddleMenu />
        <CardSelector
          cards={[
            { provider: "visa", level: "base", number: 8888777766665555 },
            { provider: "mc", level: "black", number: 8888777766668555 },
            { provider: "mc", level: "platinum", number: 8888777766664555 },
          ]}
        />
        <TransactionsContainer qTransactions={3} background={true} />
        <Offers />
      </div>


      <div className={styles.contentMd}>
        <div className={styles.Header}>
          <Balance />
        </div>
        <div className={styles.CardsPromo}>
          <CardSelector
            cards={[
              { provider: "visa", level: "base", number: 8888777766665555 },
              { provider: "mc", level: "black", number: 8888777766668555 },
              { provider: "mc", level: "platinum", number: 8888777766664555 },
            ]}
          />
          <Offers />
        </div>
        <div className={styles.Transactions}>
          <MiddleMenu />
          <TransactionsContainer qTransactions={6} background={false} />
        </div>
        </div>
    </motion.div>
  );
};

export default Home;
