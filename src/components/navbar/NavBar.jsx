import { GetFirestore } from "../../firebase/Firebase";
import { useState, useEffect } from "react";
import NavBarTemplate from "./NavBarTemplate";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = GetFirestore();
    const categoriesCollection = db.collection("category");
    categoriesCollection
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("No hay categorias");
        }
        setCategories(data.docs.map((c) => ({ ...c.data() })));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBarTemplate categories={categories} />
    </>
  );
}

export default NavBar;
