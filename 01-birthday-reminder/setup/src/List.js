import React from 'react';

const List = ({person}) => {
  // console.log(person);
  const {id,name,age,image} = person;
  return (
    
      <article id={id}  className="person"> 
      <img src={image} alt = {name}  /> 
      <div> 
        <h4> {name}  </h4>
        <p> {age}</p>
        
         </div>
      
       </article>
     
  
  );
};

export default List;
