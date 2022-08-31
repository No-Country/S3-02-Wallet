import styles from "./Transaction.module.scss"

const Transaction = (props) => {

  const transaction = props.transaction

  const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  const toPositive = (x) => { return (x * -1) };

  let date = `${transaction.date.getDate()} ${toMonthName(transaction.date.getMonth())} ${transaction.date.getFullYear()}`

  const icon = "/img/" + (transaction.category).toLowerCase() + '.svg';
  return (
    <div className={styles.transaction}>
      <div className={styles.transactionInfo}>
        <img src={icon} alt="" className={styles.categoryLogo} />
        <div>
          <h3 className={styles.category}>{transaction.category}</h3>
          <p className={styles.title}>{transaction.title}</p>
        </div>
      </div>
      <div className={styles.transactionDetail}>

        {transaction.type === "expense" ?
          <p className={styles.amount}>- ${toPositive(transaction.amount)}</p>
          :
          <p className={styles.amount}> ${transaction.amount}</p>
        }

        <p className={styles.date}>{date}</p>
      </div>
    </div>

  )
}

export default Transaction
