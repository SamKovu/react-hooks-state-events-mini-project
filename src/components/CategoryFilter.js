import React from "react";


function CategoryFilter({categories,myFilter}) {

  function handleClick(e){
   let buttons = document.querySelectorAll(".categories button")
   buttons.forEach((element) => element.className="")
   e.target.className="selected" 
   myFilter(e.target.innerText)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(
        <button onClick={(event)=>{handleClick(event)}}  key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
