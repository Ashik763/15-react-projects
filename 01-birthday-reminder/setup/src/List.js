import React from 'react';

const List = ({person}) => {
  console.log(person);
  const {id,name,age,image} = person;
  return (
    <div>
      <article className="person"> 
      <img src={image} alt = {name}  /> 
      <div> 
        <h4> {name}  </h4>
        <p> {age}</p>
        
         </div>
      
       </article>
     
    </div>
  );
};

export default List;
