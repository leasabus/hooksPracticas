import React, { useState } from 'react'

export const CounterApp = () => {

    const [count, setCount] = useState({
        count1:0,
        count2:10,
        count3: 20,
    });

    const {count1, count2, count3} = count;

    const handleCount = () =>{

        if(count3>=30) return; //termina ahi

        let counterName = 'count1';
        if (count1>=10) counterName = 'count2';
        if (count2>=20) counterName = 'count3';
    
        setCount({
            ...count,
            [counterName]: count[counterName] + 1
    })
    }

  return (
    <>
    <h2>CounterApp</h2>
    <h3>Counter: {count1}</h3>
    <h3>Counter: {count2}</h3>
    <h3>Counter: {count3}</h3>
    
    <button className='btn btn-primary' 
    onClick={handleCount}>
        +1
    </button>
    </>
  )
}
