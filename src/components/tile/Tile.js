import React from "react";

export const Tile = ({ data }) => {
  return (
    <div className="tile-container">
      {Object.keys(data).map(( key, i ) => 
        <p key={i} className={i === 1 ? "tile-title" : "tile"}>{data[key]}</p>
      )}
    </div>
  );
};