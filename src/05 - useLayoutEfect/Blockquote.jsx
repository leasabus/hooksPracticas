import React, { useLayoutEffect, useRef, useState } from 'react'

export const Blockquote = ({quote, author}) => {
  
  const refP = useRef()
  const [boxSize, setBoxSize] = useState({width:0,height:0})

  useLayoutEffect(() => {
   console.log('useLayout')
   const { width, height} = refP.current.getBoundingClientRect()
   console.log({width,height})
   setBoxSize({width,height})
  }, [quote])
  
    return (
        <>
    <blockquote className='blockquote text-end'>
                <p className='mb-1' ref={refP}> {quote} </p>
                <footer className='blockquote-footer mt-1'> {author} </footer>
            </blockquote>

            <code className='d-block mb-2'>
                {JSON.stringify(boxSize)}
            </code>
            </>
  )
}
