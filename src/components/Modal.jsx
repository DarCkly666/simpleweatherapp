import React from "react";
import { CoordContext } from "../context/CoordProvider";
import Styles from "../styles/Modal.module.css";
import { useFetch } from "../hooks/useFetch";
import { ResultOptions } from "./ResultOptions";

export const Modal = () => {
  const { openCloseModal, query } = React.useContext(CoordContext);
  const { data, loading, error } = useFetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=97f77397f6cf59d1e30efd7bde83a061`,
    []
  );

  return (
    <div className={Styles.modal_container}>
      <div className={Styles.modal_content}>
        <h2>Select</h2>
        <button
          className={Styles.modal_close_button}
          onClick={() => {
            openCloseModal(false);
          }}
        >
          Close
        </button>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error</h2>}
        <ResultOptions data={data} />
      </div>
    </div>
  );
};
