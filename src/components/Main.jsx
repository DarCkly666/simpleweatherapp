import React from "react";
import { CurrentWeather } from "./CurrentWeather";
import { SearchBar } from "./SearchBar";
import { useFetch } from "../hooks/useFetch";

import Styles from "../styles/Main.module.css";
import data from "../utils/example.json";

export const Main = () => {
  const [units, setUnits] = React.useState("standard");
  // const { data, loading, error } = useFetch(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=-16.4955455&lon=-68.1336229&units=${units}&appid=97f77397f6cf59d1e30efd7bde83a061`,
  //   {}
  // );

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (error) {
  //   return <h2>Error</h2>;
  // }

  return (
    <div className={Styles.main_container}>
      <SearchBar />
      <CurrentWeather data={data} setUnits={setUnits} />
    </div>
  );
};
