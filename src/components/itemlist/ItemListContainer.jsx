import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading/LoadingSpinner.jsx";
import { GetFirestore } from "../../firebase/Firebase";

const ItemListContainer = () => {
  let { id } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const sort = (type) => {
    const sorted =
      type === "asc"
        ? [...items].sort((a, b) => a.price - b.price)
        : [...items].sort((a, b) => b.price - a.price);
    setItems(sorted);
  };

  useEffect(() => {
    const db = GetFirestore();
    const itemCollection = id
      ? db.collection("products").where("category", "==", id)
      : db.collection("products");

    itemCollection
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("No results!");
        }
        setItems(data.docs.map((c) => ({ id: c.id, ...c.data() })));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return setLoading(true);
  }, [id]);


  const sectionTitle = id
    ? `Productos para ${id}`
    : "Productos para tus Mascotas";

  return (
    <>
      <div className="alert alert-info text-center">
        <h3>{sectionTitle}</h3>
      </div>
      <div className="container p-5">
        {loading ? <LoadingSpinner /> : <ItemList items={items} sort={sort} />}
      </div>
    </>
  );
};

export default ItemListContainer;
