import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  let {id} = useParams();
  const [item, setItem] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect (
    () => {
     
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
              fetch("/data/data.json")
          .then((res) => res.json())
          .then((result) => result.find((rs) => rs.id === parseInt(id)))
          );
        }, 500);
      }).then((resultado) => setItem(resultado))
      .then(() => setVisible(true));

      return setVisible(false);

  }, [id])

 
  return (
    
    <div className="container d-flex justify-content-center mt-5">
        {visible && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;