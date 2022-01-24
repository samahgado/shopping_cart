
import React, { useState } from 'react';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import data from "./data.json"
import Products from './component/products/Products';
import Filter from './component/Filter/Filter';


function App() {
  const[products,setProducts] = useState(data)
  console.log(products)
  return (
    <div className="layout">
     <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products}/>
          <Filter/>
         
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
