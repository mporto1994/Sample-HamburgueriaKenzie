
import { useEffect, useState } from 'react';
import './App.css';
import {ProductsList} from "./components/ProductsList"
import { Header } from './components/Header';
import { Cart } from './components/Cart';
function App() {
  const [products,setProducts]=useState([])
  const [cartProducts,setCartProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])


  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response)=> response.json())
    .then((response)=>setProducts(response))
    .catch((err)=> console.log(err))
  },[])


  const AddToCart = (product) => {
    console.log(product)
    let contain=false
    cartProducts.map((item)=>{
      if(item.name===product.name){
        contain=true
      }

    })
    if(contain===false){
      setCartProducts([...cartProducts, product])
    }
    
  }

  const removeItem= (index) => {
    setCartProducts(cartProducts.filter((item,index2)=>index2!==index))
  }

  const removeAll=()=>{
    setCartProducts([])
  }

  const search = (word) =>{
    setFilteredProducts(products.filter((item)=>item.category.toLowerCase()===word.toLowerCase()||item.name.toLowerCase()===word.toLowerCase()))
    
  }

  return (
    <div className="App">
      <div className='Container'>
        <Header search={search}/>
        <body>
          
          <ProductsList prop={filteredProducts.length===0?products:filteredProducts} func={AddToCart}/> 
          <Cart removeAll={removeAll} prop={cartProducts} removeItem={removeItem} cartProducts={cartProducts}/>
        </body>
      </div>
      
    </div>
  );
}

export default App;
