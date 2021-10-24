import React, { useEffect, useState } from 'react';
import Tour from './Tour';
const Tours = () => {

  const [tours,setTours] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setTours(data))
  },[])
  const url = 'https://course-api.com/react-tours-project';


  // console.log(tours);




  return (<div> 

       <h2 className="title"> Our Tours</h2>
        {tours.map(tour => <Tour key={tour.id} tour = {tour} />)}
    
    
     </div>)
};

export default Tours;
