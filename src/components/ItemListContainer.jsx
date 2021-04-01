import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  let { id } = useParams();

  const [items, setItems] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    // console.log('efecto de carga de datos')
    setTimeout(() => {
      fetch("/data/data.json")
        .then((res) => res.json())
        .then((result) =>
          id ? result.filter((rs) => rs.category === id) : result
        )
        .then((filterItems) => setItems(filterItems));
    }, 500);
  }, [id]);

  useEffect(() => {
    // console.log('efecto de order')
    const sortItems = (type) => {

      const sorted = (type === "asc") ? [...items].sort((a, b) => a.price - b.price) : [...items].sort((a, b) => b.price - a.price);
      setItems (sorted);
      
    }

    sortItems(sortType)

  }, [sortType])

  // const orderByPrice = (orderBy) =>  setOrder(orderBy);

  return (
    <div className="container p-5">
      <div className="row justify-content-right mb-4">
        <div className="col-3">
        <select className="form-select" onChange={(e) => setSortType(e.target.value)}>
  <option defaultValue="default">Ordenar</option>
  <option value="asc">Menor precio</option>
        <option value="desc">Mayor precio</option>
</select>
       
          
        </div>
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
