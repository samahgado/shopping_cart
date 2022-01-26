
import React, { useState } from 'react';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import data from "./data.json"
import Products from './component/products/Products';
import Filter from './component/Filter/Filter';


function App() {
  const[products,setProducts] = useState(data)
  const[size,setSize]= useState("")
  const[order,setOrder]= useState("")
  

  const handleFilterBySize = (e)=>{
    setSize(e.target.value);
    if(e.target.value == "ALL"){
      setProducts(data);
    }else{
      
       let productsClone =  [...products];
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
    

  
  return (
    <div className="layout">
     <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products}/>
          <Filter size={size} handleFilterBySize={handleFilterBySize} 
          order={order} handleFilterByOrder={handleFilterByOrder}
          
          
          />
         
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
