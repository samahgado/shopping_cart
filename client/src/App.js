
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import data from "./data.json"
import Products from './component/products/Products';
import Filter from './component/Filter/Filter';
import Cart from './component/cart/Cart';
import store from './store/store';


function App() {
  const[products,setProducts] = useState(data)
  const[size,setSize]= useState("")
  const[order,setOrder]= useState("")
  const[cartItems,setCartItems] = useState([])
  

  const handleFilterBySize = (e)=>{
    setSize(e.target.value);
    if(e.target.value == "ALL"){
      setProducts(data);
    }else{
      
       let productsClone =  (data
        
        
        );
       let newProducts = productsClone.filter(p =>
         p.sizes.indexOf(e.target.value) != -1 )
       setProducts(newProducts)
    }
  }

    const handleFilterByOrder = (e)=>{
let sort = e.target.value;
      setOrder(sort);
      let productClone = [...products]
      let newProducts =  productClone.sort(function(a,b){
        if(sort =="lowest"){
          return   a.price  - b.price
         }else if(sort == "highest"){
           return   b.price - a.price

         }else{
           return a.id < b.id ?1 : -1
         }
      })
      
setProducts(newProducts)



    }

    const addToCart = (product)=> {
      let cartItemsClone = [...cartItems]
      let existProduct = cartItemsClone.find( p => p.id === product.id)
      if(existProduct){
        cartItemsClone.forEach( p => (p.id === product.id) ? p.qty++ : p)
      }else{
        cartItemsClone.push({...product,qty :1})
      }
      setCartItems(cartItemsClone)







    }
    

    const removeProductCart = (product) => {
      let cartItemsClone = [...cartItems]

      if(product.qty > 1){
        product.qty--
        setCartItems(cartItemsClone)
      }else{
     let filter= cartItemsClone.filter(p => p.id !== product.id)
      setCartItems(filter)
    }
    

    }

   const onAdd = (product)=>{
     let cartItemsClone=[...cartItems]
     product.qty++
     setCartItems(cartItemsClone)
     
   }

  
  return (

    <Provider store={store}>
    <div className="layout">
      
     <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products} addToCart={addToCart}/>
          <Filter size={size} handleFilterBySize={handleFilterBySize} 
          order={order} handleFilterByOrder={handleFilterByOrder}
          productsNum={products.length}
          
          
          
          />
         
        </div>
        <Cart cartItems={cartItems} removeProductCart={removeProductCart} onAdd={onAdd}/>
      </main>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
