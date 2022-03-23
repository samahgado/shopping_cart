import React from 'react';
import Input from '../Input/Input';
import "./CheckForm.scss"

 function CheckForm(props) {
     const{form,setForm,handleChange,submitOrder}=props
  return (
      <>

  {form &&
    <div className='user-form'>
        <span className='close-icon' onClick={()=>setForm(false)}>&times;</span>
        <form onSubmit={submitOrder}>
            <Input type="text" handleChange={handleChange} label="Name" name="name"/>
             <Input type="email"  name='email' handleChange={handleChange} label="Email" />
            
            <div>
            <button type='submit'>check out</button>
            </div>
            
        </form>
    </div>}
    </>  )
  
}
export default CheckForm