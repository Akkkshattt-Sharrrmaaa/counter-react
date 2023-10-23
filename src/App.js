import { useState } from 'react';
import './App.css';

function App() {

    const [count , setCount] = useState(0);

    function decreaseHandler(event){
        setCount(count-1);
    }

    function increaseHandler(event){
        setCount(count+1);
    }

    function resetHandler(event){
        setCount(0);
    }

  return (

<div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-10 bg-[#344151]">

            {/* heading  */}
            <div className=" text-[#0893d4] font-medium text-2xl">Increment & Decrement</div>
             
            {/* control center */}
            <div className=" bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">

                <button onClick={decreaseHandler} className=" border-r-2 w-20 text-center border-[#bfbfbf] text-5xl"> - </button>

                <div className=" font-bold gap-12 text-5xl">{count}</div>

                <button onClick={increaseHandler} className=" border-l-2 w-20 text-center border-[#bfbfbf] text-5xl"> + </button>

            </div> 

            {/* reset button */}
            <button onClick={resetHandler} className=" bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg "> Reset </button>
        </div>
  );
}

export default App;
