import React from "react";
import { ResultItem } from "./ResultItem";

export const ResultOptions = ({ data }) => {
  return (
    <ul style={{ listStyleType: "none", width: "100%" }}>
      {data.map((item) => (
        <ResultItem key={item.lat} item={item} />
      ))}
    </ul>
  );
};
