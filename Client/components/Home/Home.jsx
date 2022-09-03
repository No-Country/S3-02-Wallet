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
import Usuario from '../../TestData'
const Home = () => {
  const dispatch = useDispatch();
 const balance = Usuario.balance
const cards = Usuario.cards
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
        <Balance balance={balance}/>
        <MiddleMenu />
        <CardSelector
          cards={cards}
        />
        <TransactionsContainer qTransactions={3} background={true} />
        <Offers />
      </div>


      <div className={styles.contentMd}>
        <div className={styles.Header}>
          <Balance balance={balance}/>
        </div>
        <div className={styles.CardsPromo}>
          <CardSelector
           cards={cards}
          />
          <Offers />
        </div>
        <div className={styles.Transactions}>
          <MiddleMenu />
          <TransactionsContainer qTransactions={7} background={false} />
        </div>
        </div>
    </motion.div>
  );
};

export default Home;
