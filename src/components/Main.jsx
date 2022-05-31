import React from "react";
import { CurrentWeather } from "./CurrentWeather";
import { SearchBar } from "./SearchBar";
import { useFetch } from "../hooks/useFetch";

import Styles from "../styles/Main.module.css";
import { Modal } from "./Modal";

import { CoordContext } from "../context/CoordProvider";
import { Loading } from "./Loading";

export const Main = () => {
  const { isModalOpen, coord } = React.useContext(CoordContext);
  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=97f77397f6cf59d1e30efd7bde83a061`,
    {}
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  return (
    <div className={Styles.main_container}>
      <SearchBar />
      <CurrentWeather data={data} />
      {isModalOpen && <Modal />}
    </div>
  );
};
