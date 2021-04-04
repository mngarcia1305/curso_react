import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../loading/LoadingSpinner";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let {id} = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (
    () => {
     
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
              fetch("/data/data.json")
          .then((res) => res.json())
          .then((result) => result.find((rs) => rs.id === parseInt(id)))
          );
        }, 1000);
      }).then((resultado) => setItem(resultado))
      .then(() => setLoading(false));

      return setLoading(true);

  }, [id])

 
  return (
    
    <div className="container d-flex justify-content-center mt-5">
        {loading ? <LoadingSpinner /> : <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;