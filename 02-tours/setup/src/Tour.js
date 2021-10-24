import React, { useState } from 'react';

const Tour = ({tour}) => {
   let button =  document.createElement('button');
   button.innerHTML= "Refresh";
   button.className="refresh"
   button.setAttribute("class","refresh");
  //  document.querySelector("main").appendChild(button); 
  
  function deleteThis(e) {
    console.log(e.currentTarget.parentElement);
    let parentElement = e.currentTarget.parentElement;
    console.log(parentElement.nextElementSibling);
    parentElement.style.display = 'none';
    if( (parentElement.nextElementSibling===null) && !(parentElement.previousElementSibling===null) ){
     document.querySelector("body").appendChild(button); 
     console.log("ashci");
  }
}
  const { id,name,info,image,price} = tour;
  // console.log(tour);
  return <div className="single-tour">  
    <img src={image} alt = "tour"/>
    <h4>{name}</h4>
    <h4 className="tour-price"> {price}</h4> 
    <p className="tour-info">
    {info}  
      
      
     </p>
     <button onClick={(e) => deleteThis(e)} className="delete-button"> Not Interested</button>
    
     </div>;
};

export default Tour;
