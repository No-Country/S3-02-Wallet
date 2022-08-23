import styles from "./Card.module.scss";
const Card = ({ card }) => {
  const level = styles.base;
  const provider = "";
  const color = "#1D1D1D";

  switch (card.level) {
    case "gold":
      level = styles.gold;
      break;
    case "platinum":
      level = styles.platinum;
      break;
    case "black":
      level = styles.black;
      color = "#E5E4E2";
      break;
    default:
      break;
  }

  switch (card.provider) {
    case "mc":
      provider = 'url("/img/mc.png")';
      break;
    case "visa":
      provider = 'url("/img/visa.png")';
      break;
    default:
      break;
  }

  let n = card.number.toString();
  n =
    n.substring(0, 4) +
    " " +
    n.substring(4, 8) +
    " " +
    n.substring(8, 12) +
    " " +
    n.substring(12, n.length);

  return (
    <div className={"card" + " " + styles.mc_card}>
      <p>{n}</p>
      <style jsx>{`
        .card {
          background-color: ${level};
          background-image: ${provider}, url("/img/card-design.png");
          background-size: 49px, cover;
          background-repeat: no-repeat;
          background-position: 93% 90%, center center;
        }
        p {
          color: ${color};
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Card;
