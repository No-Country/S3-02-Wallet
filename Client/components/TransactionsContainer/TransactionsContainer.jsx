import React from 'react'
import Transaction from "../Transaction/Transaction"

import styles from "./TransactionsContainer.module.scss"
import transactions from "../../TestData"

function TransactionsContainer(props) {

    const sortedTransactions = transactions.sort((a, b) => b.date - a.date)

    let transactionsToShow = props.qTransactions;
    if (props.qTransactions === 0) {
        transactionsToShow = transactions.length
    }

    return (
        <div className={props.background ? styles.transactionsContainerHome : styles.transactionsContainer} >
            <div className={styles.header}>
                <h2>Transactions</h2>
                {/* <select name="filter" id="filter">
                    <option value="recent">Recent</option>
                    <option value=""></option>
                    <option value=""></option>
                </select> */}
            </div>
            <div className={styles.transactions}>
            {transactions.length != 0 ? sortedTransactions.slice(0, transactionsToShow).map((transaction) => <Transaction transaction={transaction} key={transaction.id} />) : <p>Loading...</p>
            }
            </div>
        </div>
    )
}

export default TransactionsContainer