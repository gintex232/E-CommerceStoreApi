import { Product } from "../../App/Modules/product";
import ProductList from './ProductList'; // Replace with the actual path
import { useState, useEffect } from "react";



export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])



    return (
        <>
            <ProductList products={products} />
        </>
    )
}