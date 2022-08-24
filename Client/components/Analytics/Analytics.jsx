import styles from "./Analytics.module.scss";

import { React, useState } from "react";
import TransactionsContainer from "../TransactionsContainer/TransactionsContainer";
import Chart from "../Chart/Chart";
import { getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import transactions from "../../TestData"

import GreenArrow from "../../public/img/greenArrow.svg"
import RedArrow from "../../public/img/redArrow.svg"

const Analytics = ({user}) => {
  //   const dispatch = useDispatch();
  
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }
  
let yearMonths =[]

let amountCurrentMonth = 0
let amountLastMonth = 0
let amountTwoMonth = 0

  transactions.map((transaction)=>{
    const dateParts = transaction.date.split("-");
    const dateObject = new Date(+dateParts[2],dateParts[1],+dateParts[0]); 
    // console.log(dateObject.getMonth())
    const month = toMonthName(dateObject.getMonth())
    yearMonths = [...new Set([...yearMonths, month])]

  if(dateObject.getMonth() == new Date().getMonth()+1){
    amountCurrentMonth = amountCurrentMonth + transaction.amount
  }else if((dateObject.getMonth() == new Date().getMonth())){
    amountLastMonth = amountLastMonth + transaction.amount
  }else if(dateObject.getMonth() == new Date().getMonth()-1){
    amountTwoMonth = amountTwoMonth + transaction.amount
  }

  })
  yearMonths = yearMonths.reverse()
  console.log(yearMonths)
  console.log(amountCurrentMonth)
  console.log(amountLastMonth)
  console.log(amountTwoMonth)
  

//** Set labels */
// Year
// Month
// Week


  const [balanceData , setbalanceData] = useState({
    labels: yearMonths.map(month=>month), //hacer un map desde la info
    datasets: [{
      label: "Expenses",
      data: [150,250,123,123,330,225,315,201],
      backgroundColor: 'rgb(24, 160, 251)',
      borderColor: 'rgb(24, 160, 251)',
      tension:0.3,
      showLine:true,
      pointBackgroundColor:'rgb(12, 58, 148)',
      pointBorderColor: 'rgb(256,265,256)',
      pointRadius:5,
      pointBorderWidth:1.5,
      
    }]
  })


  return (
      <div className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.month}>
          <p>Last Month</p>
          <span>
          {amountLastMonth<=amountTwoMonth ? <GreenArrow />:<RedArrow/>}
          -$ {amountLastMonth}
            </span></div>
        <div className={styles.month}>
          
          <p>Current Month</p>
          <span>
          {amountCurrentMonth<=amountLastMonth ? <GreenArrow />:<RedArrow/>}
          -$ {amountCurrentMonth}
            </span></div>
      </div>
      <div className="filterSelector">
        <div className="filter"></div>
        <div className="filter"></div>
        <div className="filter"></div>
      </div>
      <div className={styles.chart}>
      <Chart chartData={balanceData}/>
      </div>
      <TransactionsContainer qTransactions={0} background={false}/>
    </div>
  )
}

export default Analytics

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {};
  }

  return {
    props: {
      user: session.user,
    },
  };
}