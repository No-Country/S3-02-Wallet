import styles from "./Offers.module.scss";
import Shoppingbag from "../../public/img/shopping-bag.svg";
import Tagdiscount from "../../public/img/tag-discount.svg";

const Offers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.offer_1}>
          <Shoppingbag width="83px" height="79px" />
          <h3>Use your wallet to make purchase on stores!</h3>
        </div>
        <div className={styles.offer_2}>
          <Tagdiscount width="83px" height="79px" />
          <h3>Save on great discounts using the app!</h3>
        </div>
      </div>
    </div>
  );
};

export default Offers;
