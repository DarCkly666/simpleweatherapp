import React from "react";
import Styles from "../styles/SearchBar.module.css";

export const SearchBar = () => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("Submited");
  };

  return (
    <form className={Styles.search_form} onSubmit={handleSubmitForm}>
      <input
        type="search"
        placeholder="London..."
        name="search"
        value={search}
        onChange={handleSearch}
      />
      <button>Search</button>
    </form>
  );
};
