import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../loading/LoadingSpinner";
import ItemDetail from "./ItemDetail";
import { GetFirestore } from "../../firebase/Firebase";
import ItemError from "./ItemError";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = GetFirestore();
    const itemData = db.collection("products").doc(id);

    itemData
      .get()
      .then((d) => {
        if (d.exists) {
          setItem({ id: d.id, ...d.data() });
        } else {
          setItem([]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return setLoading(true);
  }, [id]);

  const ViewItem = () => item.length !== 0 ? <ItemDetail item={item} /> : <ItemError />;

  return (
    <div className="container d-flex justify-content-center mt-5">
      {loading ? <LoadingSpinner /> : <ViewItem />}
    </div>
  );
};

export default ItemDetailContainer;
