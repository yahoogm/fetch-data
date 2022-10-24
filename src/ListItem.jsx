import React from "react";

const ListItem = ({ item }) => {
  return <li className="bg-blue-300 rounded-md p-4 shadow-lg">{JSON.stringify(item)}</li>;
};

export default ListItem;
