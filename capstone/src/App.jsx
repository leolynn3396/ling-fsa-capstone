import { useState } from 'react'
import './App.css'
import { capstoneProducts } from './data'

function App() {
  const [products, setProducts] = useState(capstoneProducts)
  console.log(products)

  return (
    <div>
      {
        products.map((product) => {
          return <p>{product.title} {product.price} </p>
        })}
    </div>
  )
}

export default App
