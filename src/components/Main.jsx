import React from "react";
import { CurrentWeather } from "./CurrentWeather";
import { SearchBar } from "./SearchBar";

export const Main = () => {
  return (
    <div>
      <SearchBar />
      <CurrentWeather />
    </div>
  );
};
