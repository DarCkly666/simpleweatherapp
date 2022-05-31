import React from "react";
import Styles from "../styles/SearchBar.module.css";
import { CoordContext } from "../context/CoordProvider";

export const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const { openCloseModal, updateQuery } = React.useContext(CoordContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    updateQuery(search);
    openCloseModal(true);
  };

  return (
    <form className={Styles.search_form} onSubmit={handleSubmitForm}>
      <input
        className={Styles.search_input}
        type="search"
        placeholder="London..."
        name="search"
        value={search}
        onChange={handleSearch}
      />
      <button className={Styles.search_submit}>Search</button>
    </form>
  );
};
