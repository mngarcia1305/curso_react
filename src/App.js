import { useEffect, useState } from "react";
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, rejected) => {
      //Ver que pasa si ponen el setItems(["Pera", "Manzana", "Mango", "Uva"])
      setTimeout(() => {
        resolve(
          [
            {
              id:1,
              image: 'prod-1.png',
              title: 'Iams Adulto Large & Giant',
              text: 'Alimento para perros - 15 Kg',
              stock: 5, 
              price: 2500
            },
            {
              id:2,
              image: 'prod-2.png',
              title: 'Alimento Old Prince',
              text: 'Receta Original Para Perro  - 20Kg',
              stock: 0,
              price: 1900
            },
            {
              id:3,
              image: 'prod-3.png',
              title: 'VitalCat Balanced',
              text: 'Alimento para Gato Adulto - 2 Kg',
              stock: 7,
              price: 2200
            },
            {
              id:4,
              image: 'prod-4.png',
              title: 'Absorsol',
              text: 'Piedras Sanitarias  - 3,6 Kg.',
              stock: 4,
              price: 300
            }
          ]
        );
      }, 2000);
    }).then((result) => setItems(result));
  }, []);


  return (
    <div>
      <NavBar />
      <ItemListContainer items={items}/>
      
    </div>
  );
}

export default App;
