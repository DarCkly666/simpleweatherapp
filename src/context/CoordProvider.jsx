import React from "react";

export const CoordContext = React.createContext();

const coords = {
  lat: -16.4955,
  lon: -68.1336,
};

const CoordProvider = ({ children }) => {
  const [coord, setCoord] = React.useState(coords);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const updateCoord = (newCoord) => {
    setCoord(newCoord);
  };

  const openCloseModal = (status) => {
    setIsModalOpen(status);
  };

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <CoordContext.Provider
      value={{
        coord,
        updateCoord,
        isModalOpen,
        openCloseModal,
        query,
        updateQuery,
      }}
    >
      {children}
    </CoordContext.Provider>
  );
};

export default CoordProvider;
