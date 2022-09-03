import styles from "./cardSelector.module.scss";
import Card from "../Card/Card";

const CardSelector = ({ cards }) => {
  return (
    <div className={styles.selector}>
      <span className={styles.snap}>
        {cards.length ? (
            cards.map((card) =>  <div className={styles.card}><Card card={card} key={card.number} /> </div>)
        ) : (
          <div>
            <p>false</p>
          </div>
        )}
      </span>
    </div>
  );
};

export default CardSelector;
