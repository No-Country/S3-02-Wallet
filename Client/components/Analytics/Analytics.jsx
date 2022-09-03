import styles from "./Analytics.module.scss";

import { React, useState } from "react";
import TransactionsContainer from "../TransactionsContainer/TransactionsContainer";
import Chart from "../Chart/Chart";
import Usuario from "../../TestData";

import GreenArrow from "../../public/img/greenArrow.svg";
import RedArrow from "../../public/img/redArrow.svg";
import { useEffect } from "react";


const getWeeksInMonth = (year, month) => {
  const weeks = [],
    firstDate = new Date(year, month - 1, 1),
    lastDate = new Date(year, month, 0),
    numDays = lastDate.getDate();
  let dayOfWeekCounter = firstDate.getDay();
  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 1 || weeks.length === 0) {
      weeks.push([]);
    }
    weeks[weeks.length - 1].push(date);
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }

  return weeks;
}

const toStringWeek = (week) => {
  return (
    `${week.min.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })} - ${week.max.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`)
}

const toPositive = (x) => { return (x * -1) };

const Analytics = () => {
  const transactions = Usuario.transactions
  const [selectedFilter, setSelectedFilter] = useState("year");
  const [chartData, setChartData] = useState({ labels: [], data: [] });
  const today = new Date()
  const actualMonth = today.getMonth() + 1
  const actualYear = today.getFullYear()
  const actualDay = today.getDate()

  const toMonthName = (monthNumber) => {
    const date = today;
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  let yearMonths = [];
  let weeksOfMonths = getWeeksInMonth(today.getFullYear(), today.getMonth() + 1)
  let amountCurrentMonth = 0;
  let amountLastMonth = 0;
  let amountTwoMonth = 0;

  let expensesByMonth = []


  transactions.map((transaction) => {
    const month = toMonthName(transaction.date.getMonth() + 1);
    yearMonths = [...new Set([...yearMonths, month])];
  });


  transactions.map((transaction) => {
    const transactionMonth = transaction.date.getMonth() + 1

    if (expensesByMonth[transactionMonth]) {
      expensesByMonth[transactionMonth] = expensesByMonth[transactionMonth] + transaction.amount
    } else {
      expensesByMonth[transactionMonth] = transaction.amount
    }

    if (transactionMonth == actualMonth) {
      amountCurrentMonth = amountCurrentMonth + transaction.amount;
    } else if (transactionMonth == actualMonth - 1) {
      amountLastMonth = amountLastMonth + transaction.amount;
    } else if (transactionMonth == actualMonth - 2) {
      amountTwoMonth = amountTwoMonth + transaction.amount;
    }

  });
  yearMonths = yearMonths.reverse();

  let weeksString = [];
  let weeksExpenses = []

  weeksOfMonths.map(
    (week) => {
      weeksString.push(toStringWeek({ "min": week[0], "max": week[week.length - 1] }))
    }
  );


  transactions.map((transaction) => {
    if (transaction.date.getMonth() + 1 === actualMonth && transaction.date.getFullYear() === actualYear) {
      weeksOfMonths.map((week) => {
        if (typeof weeksExpenses[weeksOfMonths.indexOf(week)] === 'undefined') {
          weeksExpenses[weeksOfMonths.indexOf(week)] = 0
        }
        if (transaction.date.getDate() >= week[0] && transaction.date.getDate() <= week[week.length - 1]) {
          if (typeof weeksExpenses[weeksOfMonths.indexOf(week)] === 'undefined') {
            weeksExpenses[weeksOfMonths.indexOf(week)] = transaction.amount
          } else {
            weeksExpenses[weeksOfMonths.indexOf(week)] = weeksExpenses[weeksOfMonths.indexOf(week)] + transaction.amount
          }
        }
      })
    }
  })

  let expensesByDay = []


  weeksOfMonths.map((week) => {       
    if (actualDay >= week[0] && actualDay <= week[week.length - 1]) {
           transactions.map((transaction) => {
             if (transaction.date.getDate() >= week[0] && transaction.date.getDate() <= week[week.length - 1]) {
               expensesByDay[transaction.date.getDay()] = { "amount": transaction.amount, "day": transaction.date.toLocaleString('en-us', { weekday: 'short' }) }
          }
          })
      }
  })



  useEffect(() => {
    if (selectedFilter == "year") {
      setChartData({ ...chartData, labels: yearMonths, data: expensesByMonth });
    }
    else if (selectedFilter == "month") {
      setChartData({ ...chartData, labels: weeksString, data: weeksExpenses });
    }
    else {
      let labels = []
      expensesByDay.map((day) => { labels.push(day.day) })
      let data = []
      expensesByDay.map((amount) => { data.push(amount.amount) })
      setChartData({
        ...chartData,
        labels: labels, data: data
      });
    }
  }, [selectedFilter]);

  const balanceData = {
    labels: chartData.labels.map((label) => label), //hacer un map desde la info
    datasets: [
      {
        label: "Balance",
        data: chartData.data.filter(Boolean).map((expense) => expense),
        backgroundColor: "rgb(24, 160, 251)",
        borderColor: "rgb(24, 160, 251)",
        tension: 0.3,
        showLine: true,
        pointBackgroundColor: "rgb(12, 58, 148)",
        pointBorderColor: "rgb(256,265,256)",
        pointRadius: 5,
        pointBorderWidth: 1.5,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <h3>Balance</h3>
        <div className={styles.resumeBoxes}>
        <div className={styles.month}>
          <p>Last Month</p>
          <span>
            {amountLastMonth >= amountTwoMonth ? <GreenArrow /> : <RedArrow />}
            {amountCurrentMonth < 0 ? 
              <>$ {amountLastMonth}</>
              : 
              <>-$ {toPositive(amountLastMonth)}</> 
            }
          </span>
        </div>
        <div className={styles.month}>
          <p>Current Month</p>
          <span>
            {amountCurrentMonth >= amountLastMonth ? (
              <GreenArrow />
              ) : (
                <RedArrow />
                )}
            {amountCurrentMonth < 0 ? 
              <>-$ {toPositive(amountCurrentMonth)}</> 
              : 
              <>$ {amountCurrentMonth}</>
            }
          </span>
        </div>
            </div>
      </div>
      <div className={styles.filterSelector}>
        <div
          className={
            selectedFilter == "year" ? styles.filterActive : styles.filter
          }
          onClick={() => handleFilter("year")}
        >
          <p>Year</p>
        </div>
        <div
          className={
            selectedFilter == "month" ? styles.filterActive : styles.filter
          }
          onClick={() => handleFilter("month")}
        >
          <p>Month</p>
        </div>
        <div
          className={
            selectedFilter == "week" ? styles.filterActive : styles.filter
          }
          onClick={() => handleFilter("week")}
        >
          <p>Week</p>
        </div>
      </div>
      <div className={styles.chart}>
        <Chart chartData={balanceData} />
      </div>
      <div className={styles.transactions}>
        <TransactionsContainer qTransactions={0} background={false} />
      </div>
    </div>
  );
};

export default Analytics;
