import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import { PiHandWavingFill } from "react-icons/pi";
import income from "./Image/income.png";
import orders from "./Image/orders.png";
import balance from "./Image/balance.png";
import sales from "./Image/sales.png";
import bar from "./Image/bar.png";
import customers from "./Image/Customers.png";
import product from "./Image/product sell.png";
import stock from "./Image/stock data.png";

const Rightpanel = () => {
  return (
    <div className="right">
      <div className="top">
        <div className="hello">
          <RiSettingsLine
            className="Setting"
            onClick={(e) => {
              document
                .getElementsByClassName("sidebar")[0]
                .classList.toggle("sidebaronhide");
              document
                .getElementsByClassName("Setting")[0]
                .classList.toggle("Settinghide");
              document
                .getElementsByClassName("layout")[0]
                .classList.toggle("layouthide");
              document
                .getElementsByClassName("hello")[0]
                .classList.toggle("hellohide");
            }}
            size={25}
          />
          <div>Hello Shahrukh</div>
          <div>
            <PiHandWavingFill className="hand" size={20} />
          </div>
        </div>
        <div>
          <input type="search" placeholder="🔍 Search" />
        </div>
      </div>
      <div className="top2">
        <div className="card">
          <img src={income} alt="income" />
          <div className="card-right">
            <div style={{ color: "grey", fontSize: "10px" }}>Earning</div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>$198K</div>
            <div style={{ fontSize: "10px" }}>
              <span style={{ color: "green", fontWeight: "bold" }}>
                ^ 37.8%{" "}
              </span>
              this months
            </div>
          </div>
        </div>
        <div className="card">
          <img src={orders} alt="orders" />
          <div className="card-right">
            <div style={{ color: "grey", fontSize: "10px" }}>Orders</div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>$2.4K</div>
            <div style={{ fontSize: "10px" }}>
              <span style={{ color: "red", fontWeight: "bold" }}>v 2%</span>
              this months
            </div>
          </div>
        </div>
        <div className="card">
          <img src={balance} alt="balance" />
          <div className="card-right">
            <div style={{ color: "grey", fontSize: "10px" }}>Balance</div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>$2.4K</div>
            <div style={{ fontSize: "10px" }}>
              <span style={{ color: "red", fontWeight: "bold" }}>v 2%</span>
              this months
            </div>
          </div>
        </div>
        <div className="card">
          <img src={sales} alt="sales" />
          <div className="card-right">
            <div style={{ color: "grey", fontSize: "10px" }}>Total Sales</div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>$89K</div>
            <div style={{ fontSize: "10px" }}>
              <span style={{ color: "green", fontWeight: "bold" }}>^ 11%</span>
              this week
            </div>
          </div>
        </div>
      </div>
      <div className="top3">
        <div className="barchart">
          <img src={bar} alt="Bar Chart" />
        </div>
        <div className="customerpi">
          <div>
            <div style={{ fontWeight: "bold" }}>Customers</div>
            <div style={{ color: "grey", fontSize: "10px" }}>
              customers that buy Product
            </div>
          </div>
          <img src={customers} alt="Pi Chart" />
        </div>
      </div>
      <div className="top4">
        <img className="pdt" src={product} alt="Product" />
        <img className="stk" src={stock} alt="Stock" />
      </div>
    </div>
  );
};

export default Rightpanel;
