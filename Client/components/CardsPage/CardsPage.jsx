import { motion } from "framer-motion";
import { IosArrowRight } from "@styled-icons/fluentui-system-filled/IosArrowRight";
import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";
import styles from "./CardsPage.module.scss";
import Card from "../Card/Card";
import Usuario from "../../TestData";

const CardsPage = () => {
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
      style={{ position: "relative", height: "100%", width: "100%" }}
    >

      {/* <div className={styles.addDesktop}>
        <button>Add</button>{" "}
      </div> */}

      <div className={styles.container}>
        {/* <div className={styles.card}>
          <Card
            card={{ provider: "visa", level: "base", number: 8888777766665555 }}
          />
          <div className={styles.limit}>
            <div className={styles.text}>
              <h4>Your credit limit</h4>
              <p>$15.000 of $50.000</p>
            </div>
            <IosArrowRight className={styles.arrow} />
          </div>
        </div> */}
{cards.length ? cards.map((card)=>
        <div className={styles.card}>
          <Card
            card={card}
          />
          <div className={styles.limit}>
            <div className={styles.text}>
              <h4>Your credit limit</h4>
              <p>$50.000 of $300.000</p>
            </div>
            <IosArrowRight className={styles.arrow} />
          </div>
        </div>
):<></>
}

        {/* <div className={styles.add}>
          <PlusCircle />
        </div> */}
      </div>
    </motion.div>
  );
};

export default CardsPage;
