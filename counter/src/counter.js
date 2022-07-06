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


// const store = React.createstore(reducer,initialState);
// const reducer = (state,action) =>
// {

// }
// store.getState();
// export connect(x)(component);
// x = mapStateToProps || mapDispatchToProps;
// mapStateToProps(state(store) , ownProps(optional));