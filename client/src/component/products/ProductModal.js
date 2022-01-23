import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
 function ProductModal(props) {
     const {product,closeModal}=props
    return (
        <div>
           <Modal isOpen={product} onRequestClose={closeModal}>
               <span className='close-icon' onClick={closeModal}>&times;</span>
               <div className='product-info'>
                   <img src={product.imageUrl}/>
                   <p>{product.title}</p>
                   <p>price:{product.price}</p>
               </div>

               </Modal> 
        </div>
    )
}
export default ProductModal