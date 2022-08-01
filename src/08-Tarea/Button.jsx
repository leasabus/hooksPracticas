import React from 'react'

export const Button = React.memo(({numero, incrementar}) => {

    console.log('Me volvi a renderizar :c')
  return (
    <button
        className='btn btn-primary nr-3 m-1'
        onClick={()=>incrementar(numero)}
    >
        {numero}
    </button>
  )
})
