import React from "react";
import Logo from "../../images/logo.png";
import coin from "../../images/coins.png";
import Profile from "../../images/logo-demo.png";
import "./Home.css";
import { Data } from "../../Data";
import Hometopimg from "../../images/home-top.png";
import { useState } from "react";
import Card from "../../components/Card/Card";
import ExpenseChart from "../../components/ExpenseChart";
import { UserData } from "../../ChartData";
import footerlogo from "../../images/footerlogo.png";
import reward from "../../images/home-reward.png";
import goals from "../../images/home-goals.png";
import "@lottiefiles/lottie-player";
const Home = () => {
  const [value, setValue] = useState(false);
//   const [max, setMax] = useState({
//     id: "",
//     cost: 0,
//   });
  const buttonHandler = () => {
    setValue(true);
  };
  const [userData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "total cost",
        data: UserData.map((data) => data.cost),
        backgroundColor: ["#2a71d0", "#ecf0f1", "#50AF95", "#f3ba2f"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const cardElements = Data.map((goal) => {
    return (
      <Card title={goal.title} amount={goal.amount} saving={goal.saving} />
    );
  });
  return (
    <div>
      {/* home top part begins   */}

      <div className="home-top">
        <div className="home-top-nav">
          <img className="logo" src={Logo} alt="logo" />
          <img src={Profile} alt="Profile" />
        </div>
        <div className="home-top-data">
          <div className="home-top-detail">
            <div className="home-top-left">
              <h2 className="home-motto">SIMPLE WAY TO MANAGE YOUR MONEY</h2>
              <p className="home-motto-desc">
                In addition to simple expense management, the complete finance
                management with a gaming experience{" "}
              </p>
              {value === false && (
                <button className="home-top-button" onClick={buttonHandler}>
                  Start A New Journey
                </button>
              )}
            </div>
            <div className="home-top-right">
              {/* <img src={Hometopimg} alt="HomePage top"/> */}
              {/* <video src="https://assets6.lottiefiles.com/packages/lf20_zu3z8n5o.json"></video> */}
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_zu3z8n5o.json"
                background="transparent"
                speed="1"
                style={{width: "300px", height: "300px"}}
                loop
                controls
                autoplay
              ></lottie-player>
            </div>
          </div>
          {value === true && (
            <div className="home-account-details">
              <div className="account-details-row">
                <div className="account-details-left">
                  <p>BALANCE</p>
                  <h2>₹25000</h2>
                </div>
                <div className="ccount-details-right">
                  <p>MARCH</p>
                </div>
              </div>
              <div className="account-details-row">
                <h1>DAILY LIMIT : ₹833 rs</h1>
              </div>
              <div className="account-details-row">
                <div className="account-details-left">
                  <p>INCOME</p>
                  <h2>₹50000</h2>
                </div>
                <div className="ccount-details-right">
                  <p>EXPENSE</p>
                  <h2>₹25000</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* home top part ends */}
      {/* home goals part begins */}

      {value === true && (
        <div className="home-mid">
          <div className="home-mid-left">
            <img src={coin} alt="coin" />
            <h1>GOALS</h1>
          </div>
          <div className="home-mid-right">
            {" "}
            <div className="home-goals">{cardElements}</div>
          </div>
        </div>
      )}
      {/* home goals ends */}
      {/* expense chart begins */}
      {value === true && (
        <div className="expense-chart">
          <div className="piechart">
            <h1 className="expense-chart-title"> Expense Report</h1>
            <ExpenseChart chartData={userData} />
          </div>
        </div>
      )}
      {/* expense chart ends */}
      {/* bottom home starts */}
      <div className="about">
        <div className="about-row">
          <img src={reward} alt="reward" />
          <div className="about-desc">
            <h1>Unlock Your Rewards Now!</h1>
            <h3>Complete your monthly goals and get exciting rewards .</h3>
          </div>
        </div>
        <div className="about-row">
          <div className="about-desc">
            <h1>Wish it, Plan it , Do it</h1>
            <h3>
              Employ our assistance to save money while accomplishing your
              goals.
            </h3>
          </div>
          <img src={goals} alt="goals" />
        </div>
        <div className="about-row"></div>
      </div>
      {/* bottom home ends */}

      {/* footer starts */}
      <div className="footer">
        <img src={footerlogo} alt="footerlogo" />
      </div>
    </div>
  );
};

export default Home;
