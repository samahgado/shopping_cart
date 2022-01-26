import React from 'react';
import "../../css/Filter/Filter.css"
 function Filter(props) {
     const{size,handleFilterBySize,order,handleFilterByOrder} = props
  return (
  <div className='filter-wrapper'>
      <h2 className='filter-title'>Filter</h2>
      <div className='product-num'>Number Of Component 4</div>
      <div className='filter-by-size' >
          <span>filter</span>
          <select className='filter-select' value={size} onChange={handleFilterBySize}>
              <option value="ALL">ALL</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
          </select>
      </div>
      <div className='filter-by-size' >
          <span>order</span>
          <select className='filter-select' value={order} onChange={handleFilterByOrder}>
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>

          </select>
      </div>

  </div>
  
  );
}
export default Filter