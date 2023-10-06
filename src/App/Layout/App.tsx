import { useEffect, useState } from "react";
import { Product } from "../Modules/product";
import Catalog from "../../Features/catalog/catalog";
import { Typography } from "@mui/material";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

function addProduct() {
  setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'some decription',
      pictureUrl: 'http://picsum.photos/200'
    }])
}

  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct} />
      
    </>
  );
}
 
export default App;
