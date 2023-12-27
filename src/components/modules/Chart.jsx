/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { convertData } from "../../helpers/convertData";

import styles from "./Chart.module.css";
import { getCurrencySign } from "../../helpers/getCurrencySign";

function Chart({ chart, setChart, currency }) {
  const [type, setType] = useState("prices");

  const closeHandler = (e) => {
    if (e.target.id === "container") setChart(null);
  };

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={styles.container} onClick={closeHandler} id="container">
      {/* <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span> */}
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.symbol} />
          <p>{chart.coin.name}</p>
        </div>

        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>

        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>

        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>
              {getCurrencySign(currency)}
              {chart.coin.current_price.toLocaleString()}
            </span>
          </div>
          <div>
            <p>ATH:</p>
            <span>
              {getCurrencySign(currency)}
              {chart.coin.ath.toLocaleString()}
            </span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>
              {getCurrencySign(currency)}
              {chart.coin.market_cap.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data} margin={{ left: 60, }} >
        <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth={2} />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
