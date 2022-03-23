
import React,{useState} from 'react'
import "./Products.scss"

import ProductModal from './ProductModal'




 function Products(props) {
     const [product,setProduct] = useState("")
     const openModal = (product)=>{
         setProduct(product)
     }
     const closeModal = ()=>{
         setProduct(false)
     }

     
    return (
    
        
           <div className='products-wrapper'>
               {props.products.map(product => (
                   <div key={product.id} className='card'>
                       
                           <div className='img-box'>
                           
                           <img src={product.imageUrl} alt={product.title}/>
                           
                           </div>
                          
                           <div className='content'>
                               <h3>{product.title}</h3>
                               <h2 className='price'>${product.price}</h2>
                               <button className='buy' onClick={()=>props.addToCart(product)}>Add To Cart</button>
                           </div>
                           
                       </div>

        
               ))}
               
               <ProductModal product={product} closeModal={closeModal}/>
               
           </div> 
        
    )
}
export default Products
