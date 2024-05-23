// src/components/Stopwatch.jsx

import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  

  const Timer = () =>{
    intervalRef.current = setInterval(()=>{
      setCount((prevCount)=>{
        if(prevCount >= 10){
          clearInterval(intervalRef.current);
          setCount(10)
        }
        return prevCount + 1;
      });
    },1000)
  }
  

  useEffect(() => {
    /*Complete the missing code*/
    Timer()

    function cleanUp(){
      clearInterval(intervalRef.current)
    }
    return cleanUp;
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
