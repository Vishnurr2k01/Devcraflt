import React from "react";
import Logo from "../../images/logo.png";
import coin from "../../images/coins.png";
import Profile from "../../images/logo-demo.png";
import "./Home.css";
import { useState } from "react";
import ExpenseChart from "../../components/ExpenseChart";
import { UserData } from "../../ChartData";
import footerlogo from "../../images/footerlogo.png";
import tax from "../../images/home-tax.png";
import goals from "../../images/home-goals.png";
import "@lottiefiles/lottie-player";
import AOS from "aos"
AOS.init();
const Home = () => {
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
  return (
    <div>
      {/* home top part begins   */}

      <div className="home-top">
        <div className="home-top-nav">
          <img className="logo" src={Logo} alt="logo" />
          <div style={{marginTop:"1rem"}}>
            <a class="fancy" href="/signup">
              <span class="top-key"></span>
              <span class="text">Sign Up</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </a>
          </div>
        </div>
        <div className="home-top-data">
          <div className="home-top-detail">
            <div className="home-top-left">
              <h2 className="home-motto">Mastering Your Money</h2>
              <p className="home-motto-desc">
                In addition to straightforward expense management, comprehensive
                financial management in right way{" "}
              </p>
            </div>
            <div className="home-top-right">
              {/* <img src={Hometopimg} alt="HomePage top"/> */}
              {/* <video src="https://assets6.lottiefiles.com/packages/lf20_zu3z8n5o.json"></video> */}
              <lottie-player
                src="https://lottie.host/dca4307f-beea-4302-87fb-87530476a4ae/Kk8ZTyZkLh.json"
                background="transparent"
                speed="1"
                style={{ width: "600px", height: "600px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <lottie-player
            src="https://lottie.host/e18325bd-d4af-4f98-9a40-2ec4b418f2f6/Ojq7zq9uKl.json"
            background="transparent"
            speed="1"
            style={{ width: "900px", height: "500px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      {/* home top part ends */}
      {/* home goals part begins */}

      <div className="home-mid">
        <div className="home-mid-left">
          <img src={coin} alt="coin" />
          <h1>
            EXPENSE <br />
            TRACKER
          </h1>
        </div>
        <div className="home-mid-right">
          <div className="home-goals">Monitoring Spending</div>
          <div className="home-goals">Budgeting</div>
          <div className="home-goals">Identifying Areas of Overspending</div>
          <div className="home-goals">Saving Money</div>
        </div>
      </div>
      {/* home goals ends */}
      {/* expense chart begins */}
      <div className="expense-chart">
        <div className="piechart">
          <h1 className="expense-chart-title"> Expense Report</h1>
          <ExpenseChart chartData={userData} />
        </div>
      </div>
      {/* expense chart ends */}
      {/* bottom home starts */}
      <div className="about" data-aos="fade-right">
        <div className="about-row">
          <img src={tax} alt="reward" />
          <div className="about-desc">
            <h1>Tax Purposes</h1>
            <h3>
              Determine deductible expenses and can simplify the tax preparation
              process.
            </h3>
          </div>
        </div>
        <div className="about-row">
          <div className="about-desc">
            <h1>Financial Planning</h1>
            <h3>Employ our assistance to plan for future financial goals</h3>
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
