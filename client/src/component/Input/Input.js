import React from 'react';

 function Input(props) {
     const{type,handleChange,label,name}=props
  return( 
    <div>
    <label>{label}</label>
    <input type={type} required name={name} onChange={handleChange}/>
</div>
  );
}
export default Input