import React from "react";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <div>
      <table className="border-separate w-full border border-black text-sm ">
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
