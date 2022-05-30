import React from "react";
import Styles from "../styles/CurrentWeather.module.css";

export const CurrentWeather = ({ data, setUnits }) => {
  const [unit, setUnit] = React.useState("ºK");
  const [timezone, setTimezone] = React.useState("");

  const handleUnitsChange = () => {
    setUnit(unit === "ºK" ? "ºC" : "ºK");
    setUnits(unit === "ºK" ? "metric" : "standard");
  };

  const getTimeZone = () => {
    let sec = data.timezone;
    let res = "";
    if (sec < 0) {
      sec = sec * -1;
      res = res + "-";
    }
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - hours * 3600) / 60);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    res = res + hours + ":" + minutes;
    setTimezone(res);
  };

  React.useEffect(() => {
    getTimeZone();
  });
  //console.log(data);
  return (
    <div className={Styles.current_container}>
      <div className={Styles.current_current}>
        <button className={Styles.current_units} onClick={handleUnitsChange}>
          {unit}
        </button>
        <img
          className={Styles.current_image}
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="current"
        />
        <h2 className={Styles.current_temp}>{data.main.temp}</h2>
        <p>{data.weather[0].description}</p>
      </div>

      <div className={Styles.current_more_info}>
        <div>
          <h3>More Info</h3>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
          <p>Pressure: {data.main.pressure} hPa</p>
        </div>
        <div className={Styles.current_zone}>
          <p>Lat: {data.coord.lat}</p>
          <p>Lon: {data.coord.lon}</p>
          <p>Timezone: {timezone}</p>
          <p>
            City: {data.name} | {data.sys.country}
          </p>
        </div>
      </div>
    </div>
  );
};
