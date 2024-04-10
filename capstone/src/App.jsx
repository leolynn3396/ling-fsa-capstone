import './App.css'
import { useState } from 'react'
import { productList } from './data.js'

function App() {
  const [products, setProducts] = useState(productList);
  console.log(products)
  
  const [featProductId, setFeatProductId] = useState(null);
  const featuredProduct = products.find((product) => product.id === featProductId)
  console.log(featuredProduct);

  function handleClick(product) {  // updating whatever pupId was clicked by calling setProducts
    console.log("Product id: ", product.id);
    setFeatProductId(product.id);
  }

  return (
    <div className="App">
      {
        products.map((product) => {
          return (  
          <p onClick={() => handleClick(product)} key = {product.id}> 
          {product.title}</p>
          );
        })
      }
      {featProductId && 
      <div>
        <h2>{featuredProduct.title}</h2>
        <ul>
          <li>Price: {featuredProduct.price}</li>
          <li>Description: {featuredProduct.description}</li>
          <li>Image: {featuredProduct.image}</li>
          <li>Rating: {featuredProduct.rating}</li>


        </ul>
      </div>}
    </div>
  )
}

export default App
