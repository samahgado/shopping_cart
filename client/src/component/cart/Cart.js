import React,{useState} from 'react';
import CheckForm from '../CheckForm/CheckForm';
import "./Cart.scss"

 function Cart(props) {
     const {cartItems,removeProductCart,onAdd} = props
     const[form,setForm] =useState(false)
     const[value,setValue]= useState("")
     const submitOrder = (e)=>{
         e.preventDefault()
         const order = {
             name : value.name,
             email :value.email
         }
         console.log(order)
     }
     const handleChange = (e)=>{
         setValue((last)=> ({...last,[e.target.name]:e.target.value}) )
     }
  return <div className='cart-wrapper'>
     
      <div className='cart-items'>
         {cartItems.map(item => (
              <div className='cart-item' key={item.id}>
              <img src={item.imageUrl} alt=''/>
              <div className='item-info'>
                  <p>{item.title}</p>
                  <p>{item.qty}*{item.price}</p>
                  <p>${item.price*item.qty}</p>
                 
              </div>
              
              <button onClick={()=>removeProductCart(item)}>-</button>
                  <button onClick={()=>onAdd(item)}>+
                  </button>
              
              
            
          </div>
         ))}
      </div>
      {
          cartItems.length !==0 &&
      <div className='cart-footer'>
      <div className='cart-title'> <p>Cart Contain {cartItems.length} Product</p> </div> 
      <button onClick={()=>setForm(true)}>Buy Now</button>
      
    
    
    
    <div className='total-price'><span>$Total Price</span>{cartItems.reduce((acc,p)=>{
        return acc+p.price*p.qty

    },0)}</div> 


</div>
 }
 <CheckForm form={form} setForm={setForm}
 handleChange={handleChange}
 submitOrder={submitOrder}
 />
  </div>;
}
export default Cart