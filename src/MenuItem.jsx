import React from 'react';

const MenuItem = ({ title, category, price, img, desc }) => {
  
    return (
    <article>
     <img src={img} alt={title} />
      <h2>{category}</h2>
      <h4>{price}</h4>
      <h5>{desc}</h5>
    </article>
  )
}

export default MenuItem;