import React from 'react'
import { useState } from 'react';


function Counter() {
    let [count,setCount]=useState(0);
    let [liked,disLike]=useState(false);
    function handle(){
        setCount(count+1);
    
    }
    let styles={
        color:"red"
    }
    function toggle(){
        disLike(!liked);
        setCount(count+1);
    }
    function handleDec(){
      setCount(count-1);
      disLike(!liked);
    }
    


  return (
    <div>
        <h1>States in react</h1>
        <h3>clicks={count}</h3>
      <p onClick={toggle}>
        {liked ?  <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i>}
      </p>
      <button onClick={handleDec}>Decrease Clicks</button>
    </div>
  )
}

export default Counter
