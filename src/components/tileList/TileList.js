import React from "react";
import { Tile } from '../tile/Tile.js';

export const TileList = ({ items }) => {
  return (
    <div>
      {items.map(( i, k ) => <Tile key={k} data={i} />)}
    </div>
  );
};
