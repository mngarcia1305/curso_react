import React from "react";
import CartProvider from "./context/CartProvider.jsx";
import RoutesApp from './routes/RoutesApp.jsx';


function App() {

  return (
    
      <CartProvider>
     <RoutesApp />
     </CartProvider>
    
  );
}

export default App;
