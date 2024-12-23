import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
 
  useEffect(() => {
    
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  

  return (
    <div>
      <h2>Date and Time show</h2>
      <p>{date.toString()}</p>
      
    </div>  
  );
};

export default DateTime;