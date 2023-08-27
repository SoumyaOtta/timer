import React, { useEffect, useState } from 'react';

const App = () => {


  const [date, setDate] = useState(new Date());
  useEffect(() => {
  
   const inntervaltime = setInterval(() => {
    setDate(new Date())
   }, 1000);
     return ()=> clearInterval(inntervaltime)
   
  },[])
  
  const time = date.toLocaleTimeString()

  return (
    <>
      <h1> {time} </h1>
      {/* <button onClick={UpdateTime}>Get time</button> */}
    </>
  );
}

export default App;