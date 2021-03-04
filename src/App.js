import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';

const products = [
  {
    image: 'prod-1.webp',
    title: 'Dodge RAM',
    text: 'Autaso, 75.000 km. Full. Joya nunca taxi.  bla bla bla'
  },
  {
    image: 'prod-2.webp',
    title: 'Volkswagen Vento',
    text: 'Autaso, 75.000 km. Full. Joya nunca taxi.  bla bla bla.'
  },
  {
    image: 'prod-3.webp',
    title: 'Citroen C4',
    text: 'Autaso, 75.000 km. Full. Joya nunca taxi.  bla bla bla.'
  },
  {
    image: 'prod-4.webp',
    title: 'Volkswagen Golf',
    text: 'Autaso, 75.000 km. Full. Joya nunca taxi.  bla bla bla.'
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
