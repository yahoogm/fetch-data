import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItem();
  }, [reqType]);

  return (
    <div className="font-mono">
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items} />
    </div>
  );
};

export default App;
