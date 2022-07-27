import { useCounter } from '../Hooks/useCounter'
import React, { useMemo, useState } from 'react'

const heavy = (iterationNumber = 100) =>{
    for(let i=0; i<iterationNumber; i++){
        console.log('heavy')
    }
    return `${iterationNumber} iteraciones realizadas`
}


export const HookMemo = () => {
    const {counter, increment} = useCounter(1000)
    const [show, setShow] = useState(true)

    const memorize = useMemo(()=>heavy(counter),[counter])
  return (
    <>
        <h2>HookMemo</h2>
        <hr />
        <h3>Counter:    <small>{counter}</small></h3>
        <h4>{memorize}</h4>
        <button
        className="btn btn-primary"
        onClick={()=> increment()}>
            +1
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={()=>{setShow(!show)}}
        >
            Show/Hide {`${show}`}
        </button>
    </>
  )

}
