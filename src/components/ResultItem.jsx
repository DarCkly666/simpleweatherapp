import React from "react";
import { CoordContext } from "../context/CoordProvider";
import Styles from "../styles/ResultItem.module.css";

export const ResultItem = ({ item }) => {
  const { updateCoord, openCloseModal } = React.useContext(CoordContext);

  const handleClick = () => {
    const newCoord = {
      lat: item.lat,
      lon: item.lon,
    };
    updateCoord(newCoord);
    openCloseModal(false);
  };
  return (
    <li className={Styles.item_item} onClick={handleClick}>
      {item.name} | {item.country}
    </li>
  );
};
