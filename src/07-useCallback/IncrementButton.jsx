import React from 'react'

export const IncrementButton = ({increment}) => {

    console.log('<increment />')
  return (
    <button
    className='btn btn-primary'
    onClick={()=>increment(5)}
    >incrementButton</button>
  )
}
