import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading/LoadingSpinner.jsx";

const ItemListContainer = () => {
  let { id } = useParams();

  const [items, setItems] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [loading, setLoading] = useState(true);

  const sort = (type) => {
    setSortType(type);
  }

  useEffect(() => {

    setTimeout(() => {
      fetch("/data/data.json")
        .then((res) => res.json())
        .then((result) =>
          id ? result.filter((rs) => rs.category === id) : result
        )
        .then((filterItems) => setItems(filterItems))
        .then(() => setLoading(false));
    }, 2000);

    return (
      setLoading(true)
    )
  }, [id]);

  useEffect(() => {
    console.log('efecto orden', sortType)
    const sortItems = (type) => {
      const sorted = (type === "asc") ? [...items].sort((a, b) => a.price - b.price) : [...items].sort((a, b) => b.price - a.price);
      setItems(sorted);
    }
    sortItems(sortType)

    

  }, [sortType])

  const sectionTitle = id ? `Productos para ${id}` : 'Productos para tus Mascotas';

  return (
    <>
      <div className="alert alert-info text-center"><h3>{sectionTitle}</h3></div>
      <div className="container p-5">


        {loading ? <LoadingSpinner /> : <ItemList items={items} sort={sort}/>}
      </div>
    </>
  );
};

export default ItemListContainer;
