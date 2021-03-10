import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';

const products = [
  {
    id:1,
    image: 'prod-1.png',
    title: 'Iams Adulto Large & Giant',
    text: 'Alimento para perros - 15 Kg',
    stock: 5
  },
  {
    id:2,
    image: 'prod-2.png',
    title: 'Alimento Old Prince',
    text: 'Receta Original Para Perro  - 20Kg',
    stock: 0
  },
  {
    id:3,
    image: 'prod-3.png',
    title: 'VitalCat Balanced',
    text: 'Alimento para Gato Adulto - 2 Kg',
    stock: 7
  },
  {
    id:4,
    image: 'prod-4.png',
    title: 'Absorsol',
    text: 'Piedras Sanitarias  - 3,6 Kg.',
    stock: 4
  }
]

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer products={products}/>
      
    </div>
  );
}

export default App;
