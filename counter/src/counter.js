import { useState } from "react";
const Counter = () =>
{
    const [number,setNumber] = useState(0);
    const increase = () =>
    {
        console.log("increase");
          setNumber((prevState) => prevState + 1);
    }
    return (
      <>
        <button
          onClick={()=>setNumber(number+1)}
        >
          increase
        </button>
        {number}
        <button
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          decrease
        </button>
        <br />
        <button
          onClick={() => {
            setNumber(0);
          }}
        >
          reset
        </button>
      </>
    );
}
export default Counter;


