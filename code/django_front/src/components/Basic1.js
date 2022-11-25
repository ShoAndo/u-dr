import React, {useState} from 'react'

const Basic1 = () => {
  // const [product, setProducts] = useState({name:'', price: ''})
  // const [count, setCount] = useState(0)

  return (
    <div>
      <form>
        {/* <button onChange={() => setCount(prevCount=>prevCount+1)}></button> */}
        <input type='text' value={product.name}
        onChange={evt => setProducts({...product, name: evt.target.value})}/>

        <input type='text' value={product.price}
        onChange={evt => setProducts({...product, price: evt.target.value})}/>
      </form>
      <h3>Product Name is { product.name }</h3>
      <h3>Product price is { product.price }</h3>
    </div>
  )
}

export default Basic1
