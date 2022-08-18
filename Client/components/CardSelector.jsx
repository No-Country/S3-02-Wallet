import styles from "../styles/cardSelector.module.scss";
import Card from "./Card";

const CardSelector = ({cards}) => {

  return (
    <div className={styles.selector}>
      <span className={styles.snap}>
      {cards.length ? (
        cards.map((card) => (
          <Card card={card} key={card.number} />
          ))
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
