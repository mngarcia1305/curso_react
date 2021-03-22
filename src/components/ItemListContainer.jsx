import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  let { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/data.json")
        .then((res) => res.json())
        .then((result) =>
          id ? result.filter((rs) => rs.category === id) : result
        )
        .then((filterItems) => setItems(filterItems));
    }, 500);
  }, [id]);

  return (
    <div className="container p-5">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
