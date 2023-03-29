import React from 'react';


const Categories = ({category, filteredItems}) => {
  return (
    <div className='btn-container'>
     {category.map((singlecategory) => {
        return( 
      <button key={singlecategory} type="button" onClick={() => filteredItems(singlecategory)}>{singlecategory}</button>
        ) 
    })}
    </div>
  )
}

export default Categories;