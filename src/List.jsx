import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <ul className="space-y-4 p-2 ">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
