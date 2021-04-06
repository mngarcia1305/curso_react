import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../loading/LoadingSpinner";
import ItemDetail from "./ItemDetail";
import { GetFirestore } from "../../firebase/Firebase";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = GetFirestore();
    const itemData = db.collection('products').doc(id)
    
    itemData.get()
      .then((d) => {
        if (d.size === 0) {
          console.log("No results!");
        }
        //setItems(data.docs.map(doc => doc.data()));
        setItem({id: d.id, ...d.data()});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return setLoading(true);
  }, [id]);

  return (
    <div className="container d-flex justify-content-center mt-5">
      {loading ? <LoadingSpinner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
