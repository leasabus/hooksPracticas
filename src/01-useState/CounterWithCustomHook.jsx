import { useCounter } from '../Hooks/useCounter'
import React from 'react'

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(0)

  return (
    <>
    <h2>CounterWithCustomHook: {counter}</h2>
    <hr />
    <button className='btn btn-primary m-1' onClick={()=>decrement()}>-1</button>
    <button className='btn btn-primary m-1' onClick={()=>reset()}>Reset</button>
    <button className='btn btn-primary m-1' onClick={()=>increment()}>+1</button>
    </>
  )
}
